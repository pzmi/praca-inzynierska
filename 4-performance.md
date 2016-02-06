# Wydajność

Wydajność technologii można mierzyć na wielu płaszczyznach, a na otrzymane wyniki wpływa duża liczba czynników. Przedstawiane środowiska programistyczne zostały przetestowane pod kątem wydajności, w kilku odmiennych scenariuszach.

Wybrano 4 przypadki w 3 kategoriach:

 - Duża liczba zapytań:
     + zapytania nie wymagające dużej mocy obliczeniowej
 - Czasochłonne obliczenia:
     + obliczenia na liczbach całkowitych
     + operacje macierzowe
 - Ograniczenia wejścia/wyjścia
     + operacje na systemie plików

Wyżej wymienione sytuacje są powszechnie spotykane w współczesnych systemach informatycznych.

Badania przeprowadzono na sprzęcie o następujących parametrach:

Maszyna testowa:

 - Procesor: Intel(R) Core(TM)2 Duo CPU L9400 @ 1.86GHz
 - Pamięć: 4GB DDR2 800MHz
 - System operacyjny: GNU/Linux 4.2.5-1-ARCH

Maszyna testująca:

 - Procesor: Intel(R) Core(TM)2 Quad CPU Q9550 @ 2.83GHz
 - Pamięć: 4GB DDR2 800MHz
 - System operacyjny: GNU/Linux 4.2.5-1-ARCH

Na maszynę testującą celowo wybrano komputer o większej mocy, aby zapewnić ciągłość testów i uniknąć komplikacji wynikających z niewystarczającej mocy do analizy danych. Komputery podłączono bezpośrednio w sieć o przepustowości 1Gb/s.  
Oprogramowanie wykorzystane do implementacji oraz przeprowadzenia testów wybrano na podstawie powszechności zastosowania. Parametr ten określono w oparciu statystyki dostępne w publicznych repozytoriach \autocite{npm2015,mavenrepo2015, hex2015}.  
Rozwiązanie w języku Java stworzono na bazie serwera aplikacyjnego WildFly, będącego otwartą dla społeczności dystrybucją serwera JBoss Enterprise Application Platform firmy RedHat. Wspiera on najnowszą dostępną wersję standardu Java EE 7.  
W implementacji kodu JavaScript i Node.js wykorzystano bibliotekę Express.js udostępniającą podstawowe mechanizmy wymagane do stworzenia aplikacji internetowej, przy zapewnieniu stabilności dla rozwiązań produkcyjnych.  Rozwiązanie w języku Elixir korzysta z pakietu Phoenix Framework, gromadzącego dojrzałe technologie, przeznaczone do zastosowań w usługach internetowych.  
Do przeprowadzenia badań wykorzystano oprogramowanie Gatling. Udostępnia ono, bazujący na języku Scala, język definiowania testów obciążeniowych.

Wersje oprogramowania:

 - Java: 1.8.0_66
 - Wildfly: 9.0.1.Final
 - Node.js: v5.3.0
 - Express.js: 4.13.1
 - Elixir: 1.1.1
 - Phoenix Framework: 1.0.3
 - Scala: 2.11.7
 - Gatling: 2.1.7

## Duża liczba zapytań

Wiele aplikacji używanych na co dzień korzysta z łączności sieciowej. Obserwuje się w ostatnich latach znaczny wzrost na rynku usług zdalnych, a także zwiększenie liczby użytkowników owych usług. Z tego względu współczesne systemy informatyczne muszą być w stanie obsłużyć znaczną liczbę jednoczesnych połączeń i zapytań.

Test polega na wykonaniu metody HTTP GET na serwerze zwracającym prosty łańcuch tekstowy. Zasymulowano 350000 użytkowników wykonujących żądanie niezależnie, rozłożonych na przestrzeni 100 sekund.

Implementacje we wszystkich trzech technologiach są trywialne, polegają na prostym umieszczeniu łańcucha znaków w odpowiedzi, więc zostały pominięte.

### Java

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/simpletest/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania (źródło: praca własna)}
\end{figure}

Na połowę zapytań otrzymano odpowiedź w czasie poniżej 800 milisekund, a nieznaczna cześć z nich została oznaczona jako błędne.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/simpletest/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu (źródło: praca własna)}
\end{figure}

*Liczba aktywnych użytkowników* przedstawia zapytania oczekujące na odpowiedź w danej chwili czasu. Liczba aktywnych użytkowników rośnie w przybliżeniu jednostajnie. Odpowiedź na ostatnie żądanie użytkownik otrzymał po 30 sekundach od jego wysłania.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/simpletest/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu (źródło: praca własna)}
\end{figure}

Większość czasów odpowiedzi plasuje się na lewym krańcu wykresu. Występują pojedyncze wyjątki, niewielka część przekroczyła maksymalny czas oczekiwania 60 sekund.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/simpletest/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu (źródło: praca własna)}
\label{java:simple:requests}
\end{figure}

Wirtualna maszyna Javy potrzebuje czasu na, tak zwane, *rozgrzanie się*. Wtedy dokonuje wczytania niezbędnych komponentów i automatycznej optymalizacji kodu bajtowego. Zjawisko to można zaobserwować na wykresie \ref{java:simple:requests}. Na początku testu wiele żądań zostało oznaczonych jako błędnych, lecz po dokonaniu poprawek przez maszynę wirtualną liczba przyjmowanych zapytań na sekundę ustabilizowała się.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/simpletest/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu (źródło: praca własna)}
\label{java:simple:responses}
\end{figure}

Wykres \ref{java:simple:responses} również odzwierciedla proces optymalizacji. W granicy 60 sekundy testu zauważono zwiększoną liczbę błędnych odpowiedzi. Część zapytań przyjętych przed optymalizacją nie została poprawnie przetworzona.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/simpletest/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu (źródło: praca własna)}
\label{java:simple:response_percentile}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/simpletest/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu (źródło: praca własna)}
\label{java:simple:latency_percentile}
\end{figure}

Rysunki \ref{java:simple:response_percentile},\ref{java:simple:latency_percentile} przedstawiają dane jedynie dla poprawnie przetworzonych zapytań. *Czas odpowiedzi* jest różnicą czasu otrzymania pełnej odpowiedzi od czasu wysłania zapytania. *Opóźnienie* stanowi czas, który upłynął od wysłania zapytania do otrzymania pierwszego bajta odpowiedzi. W granicach 20:50:10 zauważono zmianę zarówno w czasie odpowiedzi jak i opóźnieniu. Została ona poprzedzona utratą części przetwarzanych zapytań, wywołaną uruchomieniem odśmiecacza pamięci (ang. *garbage collector*). Po tym zabiegu czasy poprawiły się i zostały zakwalifikowane do niższej kategorii na wykresach percentyli.

|                        | W sumie  | OK       | KO     |
|------------------------|----------|----------|--------|
| Zapytania              | 350000   | 342147   | 7853   |
| Średnia l./s           | 2361,052 | 2308,077 | 52,975 |
|                        |          |          |        |
| Min                    | 3        | 3        | 9      |
| 50 percentyl           | 602      | 337      | 60032  |
| 75 percentyl           | 3026     | 3019     | 61503  |
| 95 percentyl           | 25211    | 15071    | 67298  |
| 99 percentyl           | 61040    | 32740    | 91059  |
| Max                    | 91412    | 86686    | 91412  |
| Średnia                | 4155     | 2894     | 59091  |
| Odchylenie standardowe | 11121    | 7160     | 13856  |

Table: Statystyki Java w teście prostego zapytania

### JavaScript

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/simpletest/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania (źródło: praca własna)}
\end{figure}

83% zapytań zostało obsłużonych w czasie większym niż 1200 milisekund oraz 4% z całości oznaczono jako błędne.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/simpletest/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w całym czasie trwania testu (źródło: praca własna)}
\end{figure}

Liczba aktywnych użytkowników rośnie liniowo i po otrzymaniu ostatniego żądania również liniowo spada obsługując oczekujących użytkowników.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/simpletest/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/simpletest/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu (źródło: praca własna)}
\end{figure}

Liczba przyjmowanych zapytań na sekundę utrzymuje stały poziom w czasie trwania testu. Zauważono małe zaburzenia stanowiące nieznaczną część całości testu.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/simpletest/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu (źródło: praca własna)}
\end{figure}

Podobnie jak przyjmowanie, przetwarzanie i czas odpowiedzi na żądania został utrzymany na stałym poziomie. Jednakże liczba zapytań przekroczyła możliwości obsługi, w związku z czym po 60 sekundach zauważono wzrost w ilości błędów.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/simpletest/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu (źródło: praca własna)}
\end{figure}

Percentyle czasu odpowiedzi oraz opóźnienia utrzymują się na zbliżonym poziomie w całym czasie trwania testu.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/simpletest/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu (źródło: praca własna)}
\end{figure}

|                        | W sumie  | OK       | KO     |
|------------------------|----------|----------|--------|
| Zapytania              | 350000   | 335176   | 14824  |
| Średnia l./s           | 1741,328 | 1667,575 | 73,753 |
|                        |          |          |        |
| Min                    | 1        | 1        | 8      |
| 50 percentyl           | 2039     | 1932     | 60006  |
| 75 percentyl           | 4826     | 4011     | 60011  |
| 95 percentyl           | 31244    | 15422    | 60041  |
| 99 percentyl           | 60012    | 31353    | 60613  |
| Max                    | 75062    | 70845    | 75062  |
| Średnia                | 5847     | 4462     | 37180  |
| Odchylenie standardowe | 10805    | 6237     | 29181  |

Table: Statystyki JavaScript w teście prostego zapytania

\clearpage

### Elixir

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/simpletest/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania (źródło: praca własna)}
\end{figure}

Spośród wszystkich zapytań, na 93% otrzymano odpowiedzi w czasie mniejszym niż 800ms oraz nie wykazano żadnych błędów.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/simpletest/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu (źródło: praca własna)}
\end{figure}

Liczba aktywnych użytkowników stabilizuje się po 25 sekundach od rozpoczęcia testu.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/simpletest/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/simpletest/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu (źródło: praca własna)}
\end{figure}

Na wykresach \ref{elixir:simple:response_percentile} oraz \ref{elixir:simple:latency_percentile} wyraźnie widać czas stabilizacji aplikacji, po którym aplikacja zaczęła przyjmować zapytania na stałym poziomie.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/simpletest/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu (źródło: praca własna)}
\end{figure}

Wykres liczby odpowiedzi odpowiada wykresowi liczby zapytań, stała liczba odpowiedzi na sekundę i brak błędów.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/simpletest/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu (źródło: praca własna)}
\label{elixir:simple:response_percentile}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/simpletest/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu (źródło: praca własna)}
\label{elixir:simple:latency_percentile}
\end{figure}



|                        | W sumie | OK      | KO |
|------------------------|---------|---------|----|
| Zapytania              | 350000  | 350000  | 0  |
| Średnia l./s           | 3498.74 | 3498.74 | -  |
|                        |         |         |    |
| Min                    | 0       | 0       | -  |
| 50 percentyl           | 9       | 9       | -  |
| 75 percentyl           | 26      | 26      | -  |
| 95 percentyl           | 1071    | 1071    | -  |
| 99 percentyl           | 4270    | 4270    | -  |
| Max                    | 31123   | 31123   | -  |
| Średnia                | 223     | 223     | -  |
| Odchylenie standardowe | 1107    | 1107    | -  |

Table: Statystyki Elixir w teście prostego zapytania

\clearpage

## Czasochłonne obliczenia

Współczesne systemy informatyczne wykonują wiele skomplikowanych operacji. Ważna jest nie tylko możliwość obsługi dużej liczby zapytań, ale także wykorzystanie mocy obliczeniowej sprzętu do wykonywania operacji.  
Celem tego testu jest sprawdzenie wydajności technologii przy równoczesnym dostępnie wielu użytkowników, jednocześnie testując wsparcie dla dużych liczb. 

Test polega na wykonaniu metody HTTP GET na serwerze zwracającym 100000 element ciągu Fibonacciego. Zasymulowano 1000 użytkowników wykonujących zapytanie niezależnie, rozłożonych na przestrzeni 100 sekund.

### Java

~~~~{.Java .numberLines caption="Java - obliczanie n-tego elementu ciągu Fibonacciego"}
import java.math.BigDecimal;

public class Fibonacci {
    public static BigDecimal calculateNth(long n) {
        BigDecimal result = new BigDecimal(n);
        if (n < 2) {
            return result;
        }

        BigDecimal n1 = new BigDecimal(0);
        BigDecimal n2 = new BigDecimal(1);
        n--;
        while (n > 0) {
            result = n1.add(n2);
            n1 = n2;
            n2 = result;
            n--;
        }

        return result;
    }
}
~~~~

W implementacji zastosowano iteracyjny algorytm wyznaczania n-tego elementu ciągu Fibonacciego. Wybrano tę wersję algorytmu ze względu na możliwość wystąpienia przepełnienia stosu przy wykorzystaniu jej rekurencyjnego odpowiednika. Do przechowywania dużych wartości całkowitych wykorzystano klasę BigDecimal, należącą do standardowej biblioteki Javy.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/fibonacci/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania (źródło: praca własna)}
\end{figure}

74% zapytań zostało oznaczonych jako błędne z powodu przekroczenia limitu oczekiwania wynoszącego 60 sekund.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/fibonacci/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/fibonacci/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/fibonacci/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu (źródło: praca własna)}
\end{figure}

Po upłynięciu 1/3 testu serwer przestał przyjmować zapytania. Wynika to z przyjętego modelu współbieżności. Nadchodzące zapytanie jest obsługiwane w nowym wątku lub reużywany jest jeden z wcześniej utworzonych wątków. Przy takim natężeniu wymagających czasowo żądań, osiągnięto limit wykorzystywanych wątków. W związku z tym kolejne nadchodzące zapytania nie mogły zostać przetworzone.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/fibonacci/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/fibonacci/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/fibonacci/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu (źródło: praca własna)}
\end{figure}

|                        | W sumie | OK      | KO    |
|------------------------|---------|---------|-------|
| Zapytania              | 1000    | 260     | 740   |
| Średnia l./s           | 6,253   | 1,626   | 4,627 |
|                        |         |         |       |
| Min                    | 5892    | 5892    | 60000 |
| 50 percentyl           | 60011   | 32751   | 60011 |
| 75 percentyl           | 60011   | 45996   | 60011 |
| 95 percentyl           | 60011   | 56091   | 60011 |
| 99 percentyl           | 60011   | 58727   | 60012 |
| Max                    | 60014   | 59941   | 60014 |
| Średnia                | 52915   | 32721   | 60010 |
| Odchylenie standardowe | 14326   | 15440   | 1     |

Table: Statystyki Java w teście z wykorzystaniem czasochłonnych obliczeń

\clearpage

### JavaScript

~~~~{.JavaScript .numberLines caption="JavaScript - obliczanie n-tego elementu ciągu Fibonacciego"}
var BigNum = require('bignum');

function calculateNth(n) {
    var result = BigNum(n);
    if (n < 2) {
        return result;
    }

    var n1 = BigNum(0);
    var n2 = BigNum(1);
    n -= 1;
    while (n > 0) {
        result = n1.add(n2);
        n1 = n2;
        n2 = result;
        n -= 1;
    }

    return result;
}
~~~~

Powyższa implementacja jest translacją wersji w języku Java. JavaScript nie posiada w standardzie wsparcia dla dużych liczb całkowitych. Do ich przechowywania wykorzystano bibliotekę *bignum*.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/fibonacci/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania (źródło: praca własna)}
\end{figure}

96% zapytań zostało oznaczonych jako błędne ze względu na przekroczenie czasu żądania wynoszącego 60 sekund. Wykorzystana biblioteka *bignum* jest implementacją natywną. Ze względu na charakterystykę zadania, wykonywanie jest wiele operacji na dużych liczbach. Z tego powodu silnik V8 języka JavaScript jest zmuszony do wykonywania ciągłych odwołań do natywnego kodu, co znaczenie spowalnia pracę aplikacji.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/fibonacci/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/fibonacci/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/fibonacci/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/fibonacci/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/fibonacci/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/fibonacci/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu (źródło: praca własna)}
\end{figure}

|                        | W sumie | OK    | KO    |
|------------------------|---------|-------|-------|
| Zapytania              | 1000    | 38    | 962   |
| Średnia l./s           | 5,249   | 0,199 | 5,05  |
|                        |         |       |       |
| Min                    | 1787    | 1787  | 60000 |
| 50 percentyl           | 60005   | 30198 | 60004 |
| 75 percentyl           | 60006   | 44441 | 60006 |
| 95 percentyl           | 91075   | 55782 | 91075 |
| 99 percentyl           | 91104   | 58082 | 91104 |
| Max                    | 91115   | 58662 | 91115 |
| Średnia                | 62260   | 30188 | 63527 |
| Odchylenie standardowe | 10900   | 16884 | 8367  |

Table: Statystyki JavaScript w teście z wykorzystaniem czasochłonnych obliczeń

\clearpage

### Elixir

~~~~{.Elixir .numberLines caption="Elixir - obliczanie n-tego elementu ciągu Fibonacciego"}
defmodule Test.Calculation.Fibonacci do
    def calculate_nth(0), do: 0
    def calculate_nth(1), do: 1
    def calculate_nth(n), do: fib(0, 1, n-2)
 
    defp fib(_, prv, -1), do: prv
    defp fib(prvprv, prv, n) do
        next = prv + prvprv
        fib(prv, next, n-1)
    end
end
~~~~

W języku Elixir, z racji jego funkcyjnego charakteru, nie istnieje pojęcie pętli. Z tego względu wykorzystano rekurencyjną wersję algorytmu. Użyto *rekurencji ogonowej* (*rekurencji prawostronnej*, ang. *tail call*), która umożliwia automatyczną optymalizację kodu rekurencyjnego do wersji iteracyjnej. Zabieg ten zwiększa wydajność i eliminuje zagrożenie przepełnienia stosu.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/fibonacci/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania (źródło: praca własna)}
\end{figure}

1/3 zapytań została oznaczona jako błędne ze względu na przekroczenie maksymalnego czasu żądania wynoszącego 60 sekund. Poprawne odpowiedzi otrzymano w czasie powyżej 1200 milisekund. Jedynie nieznaczną część z nich otrzymano poniżej 1200 milisekund.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/fibonacci/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/fibonacci/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/fibonacci/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu (źródło: praca własna)}
\end{figure}

W połowie testu obciążony system ograniczył przyjmowanie nadchodzących zapytań czego rezultatem są zwrócone błędy.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/fibonacci/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/fibonacci/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/fibonacci/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu (źródło: praca własna)}
\end{figure}

|                        | W sumie  | OK     | KO     |
|------------------------|----------|--------|--------|
| Zapytania              | 1 000,00 | 747,00 | 253,00 |
| Średnia l./s           | 6,26     | 4,68   | 1,585  |
|                        |          |        |        |
| Min                    | 484      | 484    | 60008  |
| 50 percentyl           | 46684    | 35390  | 60009  |
| 75 percentyl           | 60008    | 48516  | 60009  |
| 95 percentyl           | 60008    | 56588  | 60009  |
| 99 percentyl           | 60009    | 59529  | 60010  |
| Max                    | 60010    | 59975  | 60010  |
| Średnia                | 40075    | 33324  | 60008  |
| Odchylenie standardowe | 18823    | 17152  | 0      |

Table: Statystyki Elixir w teście z wykorzystaniem czasochłonnych obliczeń

\clearpage

## Operacje na zbiorach danych

Zadaniem testu \ref{czasochux142onne-obliczenia} było zbadanie zachowania systemu przy dużej liczby wykonywanych operacji na każde otrzymane żądanie. Celem tego testu jest porównanie każdej z wybranych technologii w kategorii możliwości manipulowania danymi pod obciążeniem.

Test polega na wykonaniu metody HTTP POST, w ciele której umieszczono wygenerowaną macierz liczb całkowitych o rozmiarze 100 na 100. Zadaniem serwera jest zwrócenie w odpowiedzi transponowanej macierzy. Zasymulowano 10000 użytkowników wykonujących zapytanie niezależnie, rozłożonych na przestrzeni 100 sekund.

### Java

~~~~{.Java .numberLines caption="Java - transpozycja macierzy"}
public class Matrix {
    public static int[][] transpose(int [][] matrix) {
        int xDimension = matrix.length;
        int yDimension = matrix[0].length;

        int[][] result = new int[yDimension][xDimension];
        for (int row = 0; row < xDimension; row++) {
            for (int col = 0; col < yDimension; col++) {
                result[col][row] = matrix[row][col];
            }
        }

        return result;
    }
}
~~~~

Powyższy kod pobiera wymiary $x, y$ przekazanej macierzy $a$, aby utworzyć nową macierz $b$ o wymiarach $y, x$. Następnie, wiersz po wierszu i element po elemencie z każdego wiersza, wartości macierzy $a$ są przepisywane do macierzy $b$, tak aby $a_{xy} = b_{yx}$

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/matrix/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania (źródło: praca własna)}
\end{figure}

Korzystając z implementacji w języku Java żadne z zapytań nie zwróciło błędu. Na 99% żądań odpowiedź otrzymano poniżej 800 milisekund, a jedynie 83 z nich przetworzono powyżej tej granicy.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/matrix/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/matrix/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/matrix/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/matrix/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu (źródło: praca własna)}
\end{figure}

Zauważono ubytek, a zaraz po nim skok liczby odpowiedzi na sekundę w początkowej fazie testu. Po wstępnej inicjalizacji aplikacji, każdy nowy użytkownik został obsłużony na bieżąco.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/matrix/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/matrix/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu (źródło: praca własna)}
\end{figure}

Wystąpiła niewielka różnica w czasach odpowiedzi i opóźnienia pomiędzy poszczególnymi zapytaniami w czasie trwania testu.

|                        | W sumie | OK     | KO |
|------------------------|---------|--------|----|
| Zapytania              | 10000   | 10000  | 0  |
| Średnia l./s           | 99,785  | 99,785 | -  |
|                        |         |        |    |
| Min                    | 5       | 5      | -  |
| 50 percentyl           | 209     | 209    | -  |
| 75 percentyl           | 210     | 210    | -  |
| 95 percentyl           | 214     | 214    | -  |
| 99 percentyl           | 815     | 815    | -  |
| Max                    | 1418    | 1418   | -  |
| Średnia                | 162     | 162    | -  |
| Odchylenie standardowe | 137     | 137    | -  |

Table: Statystyki Java w teście z wykorzystaniem zbiorów danych

\clearpage

### JavaScript

~~~~{.JavaScript .numberLines caption="JavaScript - transpozycja macierzy"}
function transpose(matrix) {
    var xDimension = matrix.length;
    var yDimension = matrix[0].length;

    var result = [];
    for (var row = 0; row < xDimension; row++) {
        var new_row = [];
        for (var col = 0; col < yDimension; col++) {
            new_row.push(matrix[col][row]);
        }
        result.push(new_row);
    }

    return result;
}
~~~~

Implementacja ta jest translacją z języka Java, jednak każdy z wierszy jest tworzony i uzupełniany niezależnie, a następnie dołączany na koniec macierzy wynikowej.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/matrix/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania (źródło: praca własna)}
\end{figure}

78% ze wszystkich zapytań zostało obsłużonych poniżej 800 milisekund oraz żadne nie przekroczyło granicy 1200 milisekund czasu odpowiedzi.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/matrix/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/matrix/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/matrix/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/matrix/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu (źródło: praca własna)}
\end{figure}

Wszystkie żądania przyjęto niezwłocznie do obsługi, zaś wykres czasu odpowiedzi przedstawia niemalże cykliczne skoki. Node.js operuje jednym wątkiem w jednym procesie. W czasie testu system operacyjny starał się zbalansować pracę obydwu dostępnych rdzeni procesora przenosząc obciążenie pomiędzy nimi.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/matrix/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu (źródło: praca własna)}
\label{js:matrix:response_percentile}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/matrix/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu (źródło: praca własna)}
\label{js:matrix:latency_percentile}
\end{figure}

Na podstawie wykresów \ref{js:matrix:response_percentile} oraz \ref{js:matrix:latency_percentile} można zaobserwować wpływ optymalizacji przetwarzania zapytań przez silnik V8. Czas odpowiedzi, jak i opóźnienie wyraźnie spada podczas trwania testu.

|                        | W sumie | OK     | KO |
|------------------------|---------|--------|----|
| Zapytania              | 10000   | 10000  | 0  |
| Średnia l./s           | 99,743  | 99,743 | -  |
|                        |         |        |    |
| Min                    | 219     | 219    | -  |
| 50 percentyl           | 655     | 655    | -  |
| 75 percentyl           | 779     | 779    | -  |
| 95 percentyl           | 1002    | 1001   | -  |
| 99 percentyl           | 1102    | 1102   | -  |
| Max                    | 1161    | 1161   | -  |
| Średnia                | 644     | 644    | -  |
| Odchylenie standardowe | 203     | 203    | -  |

Table: Statystyki JavaScript w teście z wykorzystaniem zbiorów danych

\clearpage

### Elixir

~~~~{.Elixir .numberLines caption="Elixir - transpozycja macierzy"}
defmodule Test.Calculation.Matrix do
    def transpose(matrix) do
        matrix |>
        List.zip |>
        Enum.map(&Tuple.to_list(&1))
    end
end
~~~~

Transpozycja macierzy w języku Elixir korzysta z jego funkcyjnych możliwości. Dzięki użyciu funkcji dostępnych w standardowej bibliotece kod jest bardziej zwięzły od pozostałych implementacji. Funkcja *List.zip* łączy w krotki elementy z każdego wiersza macierzy o tej samej pozycji. Następnie, używając funkcji *Enum.map*, na każdej z utworzonych krotek wykonywana jest funkcja *Tuple.to_list*, w celu przekształcenia ich do jednorodnej macierzy.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/matrix/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania (źródło: praca własna)}
\end{figure}

Błędne zapytania stanowią 7% całego testu, pozostałe zaś zostały przetworzone w czasie powyżej 1200 milisekund.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/matrix/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/matrix/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/matrix/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu (źródło: praca własna)}
\end{figure}

Liczba przyjmowanych żądań na sekundę utrzymywała się na stałym poziomie. 
Jednak, część zapytań, ze względu na obciążenie została odrzucona, a odpowiedzi na nie przekroczyły maksymalny czas żądania wynoszący 60 sekund.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/matrix/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/matrix/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/matrix/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu (źródło: praca własna)}
\end{figure}

Pomimo utraty części zapytań w granicach 19:37:25 czas odpowiedzi oraz opóźnienie uległy poprawie.

|                        | W sumie | OK     | KO    |
|------------------------|---------|--------|-------|
| Zapytania              | 10000   | 9274   | 726   |
| Średnia l./s           | 65,691  | 60,922 | 4,769 |
|                        |         |        |       |
| Min                    | 443     | 443    | 38129 |
| 50 percentyl           | 17306   | 16997  | 60004 |
| 75 percentyl           | 23553   | 21548  | 60005 |
| 95 percentyl           | 60004   | 41425  | 60006 |
| 99 percentyl           | 60005   | 47648  | 62513 |
| Max                    | 75051   | 55303  | 75051 |
| Średnia                | 22038   | 19058  | 60103 |
| Odchylenie standardowe | 14021   | 9461   | 1518  |

Table: Statystyki Elixir w teście z wykorzystaniem zbiorów danych

\clearpage

## Ograniczenia wejścia/wyjścia

Większość systemów informatycznych korzysta z pewnego rodzaju urządzeń wejścia/wyjścia. Nie licząc urządzenia sieciowego, używanymi interfejsami mogą być system plików czy system zarządzania bazą danych. W tym teście wykorzystano system plików, gdyż jest obsługiwany przez standardową bibliotekę każdej z porównywanych technologii, w przeciwieństwie do komunikacji z bazą danych. 

Test polega na wykonaniu metody HTTP GET na serwerze zwracającym plik tekstowy ze znakami ASCI o rozmiarze 1MB. Zasymulowano 12000 użytkowników wykonujących zapytanie niezależnie, rozłożonych na przestrzeni 100 sekund.

Implementacje we wszystkich trzech technologiach są trywialne, korzystają ze standardowej biblioteki do umieszczenia pliku w ciele odpowiedzi, więc zostały pominięte.

### Java

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/file/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania (źródło: praca własna)}
\end{figure}

Nie utracono żadnego żądania i żadna odpowiedź nie została oznaczona jako błędna, lecz 100% z nich otrzymano w czasie większym niż 1200 milisekund.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/file/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu (źródło: praca własna)}
\end{figure}

Liczba aktywnych użytkowników rośnie jednostajnie ze względu na oczekiwanie na obsługę poprzedzających zapytań.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/file/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/file/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/file/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu (źródło: praca własna)}
\end{figure}

Serwer utrzymał stały poziom obsługi przychodzących połączeń oraz odpowiedzi.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/file/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/file/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu (źródło: praca własna)}
\end{figure}

Czas odpowiedzi oraz opóźnienie pokrywają się z liczbą aktywnych użytkowników. Wraz ze wzrostem liczby oczekujących zapytań wzrasta czas odpowiedzi oraz opóźnienie. Wystąpiło nieznaczne rozwarstwienie w czasach odpowiedzi w danej chwili czasu testu.

|                        | W sumie | OK      | KO |
|------------------------|---------|---------|----|
| Zapytania              | 12000   | 12000   | 0  |
| Średnia l./s           | 115,657 | 115,657 | -  |
|                        |         |         |    |
| Min                    | 1067    | 1067    | -  |
| 50 percentyl           | 2611    | 2611    | -  |
| 75 percentyl           | 3252    | 3252    | -  |
| 95 percentyl           | 3782    | 3782    | -  |
| 99 percentyl           | 3882    | 3882    | -  |
| Max                    | 4233    | 4233    | -  |
| Średnia                | 2606    | 2606    | -  |
| Odchylenie standardowe | 759     | 759     | -  |

Table: Statystyki Java w teście z ograniczeniami wejścia/wyjścia

\clearpage

### JavaScript

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/file/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania (źródło: praca własna)}
\end{figure}

Na 10% z otrzymanych zapytań serwer odpowiedział w czasie poniżej 800 milisekund, na kolejnych 9% w czasie pomiędzy 800 a 1200 milisekund, zaś pozostałe powyżej 1200 milisekund.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/file/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu (źródło: praca własna)}
\end{figure}

Liczba aktywnych użytkowników rośnie jednostajnie ze względu na oczekiwanie na obsługę poprzedzających zapytań.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/file/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/file/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/file/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu (źródło: praca własna)}
\end{figure}

Zarówno liczbę zapytań jak i odpowiedzi utrzymano na stałym poziomie.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/file/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/file/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu (źródło: praca własna)}
\end{figure}

Czas odpowiedzi oraz opóźnienie rosną wraz z wzrastającą liczbą aktywnych użytkowników, oczekujących na odpowiedź. Opóźnienia oraz czasy odpowiedzi w danej chwili czasu są niejednorodne, rozwarstwienie rośnie w miarę przybywania aktywnych użytkowników.

|                        | W sumie | OK      | KO |
|------------------------|---------|---------|----|
| Zapytania              | 12000   | 12000   | 0  |
| Średnia l./s           | 114,718 | 114,718 | -  |
|                        |         |         |    |
| Min                    | 248     | 248     | -  |
| 50 percentyl           | 2461    | 2461    | -  |
| 75 percentyl           | 3632    | 3631    | -  |
| 95 percentyl           | 7101    | 7101    | -  |
| 99 percentyl           | 10849   | 10849   | -  |
| Max                    | 22763   | 22763   | -  |
| Średnia                | 2921    | 2921    | -  |
| Odchylenie standardowe | 2162    | 2162    | -  |

Table: Statystyki JavaScript w teście z ograniczeniami wejścia/wyjścia

\clearpage

### Elixir

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/file/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania (źródło: praca własna)}
\end{figure}

Zaledwie 2% zapytań obsłużono w czasie poniżej 800 milisekund, 90% całości powyżej 1200 milisekund, pozostałe żądania trafiły pomiędzy te dwie grupy. Żadna z odpowiedzi nie została oznaczona błędem.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/file/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu (źródło: praca własna)}
\end{figure}

Liczba aktywnych użytkowników rośnie jednostajnie ze względu na oczekiwanie na obsługę poprzedzających zapytań.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/file/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/file/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/file/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu (źródło: praca własna)}
\end{figure}

Utrzymano stały poziom poziom obsługi połączeń przychodzących oraz przetwarzania odpowiedzi.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/file/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu (źródło: praca własna)}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/file/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu (źródło: praca własna)}
\end{figure}

Czas odpowiedzi oraz opóźnienie rosną wraz z wzrastającą liczbą aktywnych użytkowników, oczekujących na odpowiedź. Opóźnienia oraz czasy odpowiedzi w danej chwili czasu są niejednorodne, rozwarstwienie rośnie w miarę przybywania aktywnych użytkowników.

|                        | W sumie | OK      | KO |
|------------------------|---------|---------|----|
| Zapytania              | 12000   | 12000   | 0  |
| Średnia l./s           | 116,457 | 116,457 | -  |
|                        |         |         |    |
| Min                    | 639     | 639     | -  |
| 50 percentyl           | 2797    | 2797    | -  |
| 75 percentyl           | 3988    | 3988    | -  |
| 95 percentyl           | 7900    | 7900    | -  |
| 99 percentyl           | 11616   | 11616   | -  |
| Max                    | 21174   | 21174   | -  |
| Średnia                | 3342    | 3342    | -  |
| Odchylenie standardowe | 2239    | 2239    | -  |

Table: Statystyki Elixir w teście z ograniczeniami wejścia/wyjścia

\clearpage

## Podsumowanie

\begin{figure}[!ht]
\centering
\includegraphics[resolution=120]{test_results/summary/simple_avg.png}
\caption{Wykres średniej liczby zapytań dla prostych zapytań (źródło: praca własna)}
\end{figure}

W przypadku testu dużej liczby jednoczesnych zapytań najlepszy wynik otrzymał Elixir. Osiągnął 3498,74 żądań na sekundę, a żadne z nich nie otrzymało błędnej odpowiedzi. Zastosowanie modelu aktorowego do obsługi zapytań sprowadza się do oddelegowania każdego przychodzącego żądania do nowego aktora. Strategia ta wypadła lepiej od odpowiednika w Javie, zakładającego wykorzystywanie wątków systemu operacyjnego do przetwarzania zapytań. Najgorszy wynik otrzymano przy użyciu JavaScript. Średnia liczba otrzymanych błędnych odpowiedzi niewiele różni się pomiędzy Javą i JavaScriptem, lecz przy 74% wydajności JavaScriptu względem Javy.

\begin{figure}[!ht]
\centering
\includegraphics[resolution=120]{test_results/summary/simple_percentage.png}
\caption{Wykres poprawnej wymiany zapytań i odpowiedzi dla prostych zapytań (źródło: praca własna)}
\end{figure}

\begin{figure}[!ht]
\centering
\includegraphics[resolution=120]{test_results/summary/simple_response.png}
\caption{Wykres czasu odpowiedzi dla prostych zapytań}
\end{figure}

W tym przypadku znaczący wpływ  wywarła optymalizacja w czasie wykonywania programu. Czasy odpowiedzi pierwszych 20 sekund przetwarzania w Elixirze, chociaż niższe od ekwiwalentnych w Javie i JavaScripcie, są nieporównywalnie wyższe od kolejnych. Wirtualna maszyna Erlanga wykryła powtarzający się wzorzec i stworzyła optymalny kod dla tego przypadku. Powtórne testy wykazały takie same wyniki w każdej z prób. Średni czas odpowiedzi dla Javy i JavaScriptu jest porównywalny, z nieznaczącą przewagą pierwszej technologii. Rezultat ten odbił się na odchyleniu standardowym ze względu na wyższy czas maksymalny w Javie.

\begin{figure}[!ht]
\centering
\includegraphics[resolution=120]{test_results/summary/fib_avg.png}
\caption{Wykres średniej liczby zapytań dla wyliczenia liczby ciągu Fibonacciego (źródło: praca własna)}
\end{figure}

W grupie czasochłonnych obliczeń, dla przypadku obliczania liczby Fibonacciego, pomimo zbliżonej średniej liczbie zapytań na sekundę pomiędzy Javą i Elixirem,  Elixir osiągnął lepszy wynik pod względem średniej liczby zapytań na sekundę oraz odsetka błędnych odpowiedzi. Procent poprawnie przetworzonych zapytań Javy i JavaScriptu, odpowiednio 26% i 4%, jest nieporównywalny z 75% Elixira.

\begin{figure}[!ht]
\centering
\includegraphics[resolution=120]{test_results/summary/fib_percentage.png}
\caption{Wykres poprawnej wymiany zapytań i odpowiedzi dla wyliczenia liczby ciągu Fibonacciego (źródło: praca własna)}
\end{figure}

\begin{figure}[!ht]
\centering
\includegraphics[resolution=120]{test_results/summary/fib_response.png}
\caption{Wykres czasu odpowiedzi dla wyliczenia liczby ciągu Fibonacciego (źródło: praca własna)}
\label{summary:fib:response}
\end{figure}

Czasy odpowiedzi dla każdej z trzech testowanych technologii plasują się na podobnym poziomie, z różnicami jedynie w czasach minimalnych. Należy jednak wziąć pod uwagę fakt, że rysunek \ref{summary:fib:response} przedstawia wyniki jedynie dla odpowiedzi poprawnych. W przypadku technologii Java i JavaScript wyniki mogą stanowić źródło nieprawdy, gdyż niewielka cześć całości żądań testu została przez nie przetworzona poprawnie.

\begin{figure}[!ht]
\centering
\includegraphics[resolution=120]{test_results/summary/matrix_avg.png}
\caption{Wykres średniej liczby zapytań dla transpozycji macierzy (źródło: praca własna)}
\end{figure}

W przypadku transpozycji macierzy Java oraz JavaScript uzyskały niemalże identyczne wyniki. Rozwiązania z wykorzystaniem obu technologii obsłużyły poprawnie wszystkie zapytania z wynikiem około 100 zapytań na sekundę. 

\begin{figure}[!ht]
\centering
\includegraphics[resolution=120]{test_results/summary/matrix_percentage.png}
\caption{Wykres poprawnej wymiany zapytań i odpowiedzi dla transpozycji macierzy (źródło: praca własna)}
\end{figure}

\begin{figure}[!ht]
\centering
\includegraphics[resolution=120]{test_results/summary/matrix_response.png}
\caption{Wykres czasu odpowiedzi dla transpozycji macierzy (źródło: praca własna)}
\end{figure}

W kategorii czasu odpowiedzi Java wypadła lepiej od JavaScript ze średnim czasem 162 milisekund przeciwko 644 milisekundom. W tym teście wyniki Elixira są znaczenie gorsze od dwóch pozostałych technologii osiągając średni czas odpowiedzi równy 22038 milisekund oraz tracąc 7% zapytań. Tak pokaźne pogorszenie w stosunku do poprzednich testów wynika z przyjętego modelu obliczeń. Model aktorowy, który uprzednio stanowił atut, jest przyczyną dłuższych czasów odpowiedzi. Ze względu na fakt, że lekkie procesy w wirtualnej maszynie Erlanga nie współdzielą stanu, wszystkie dane pomiędzy nimi są kopiowane powodując opóźnienia. Proces transpozycji macierzy w dużej mierze polega na przekształceniach struktur danych. W języku Elixir wszystkie struktury danych są niezmienne, więc w każdym kroku wykonywane są kolejne kopie danych, co ma negatywny wpływ na wyniki.

\begin{figure}[!ht]
\centering
\includegraphics[resolution=120]{test_results/summary/file_avg.png}
\caption{Wykres średniej liczby zapytań dla odczytu pliku}
\end{figure}

W przypadku odczytu pliku wszystkie zapytania i odpowiedzi zostały obsłużone w 100%.

\begin{figure}[!ht]
\centering
\includegraphics[resolution=120]{test_results/summary/file_response.png}
\caption{Wykres czasu odpowiedzi dla odczytu pliku (źródło: praca własna)}
\end{figure}

Java uzyskała bardzo stabilne wyniki, wydajnościowo test nie stanowił problemu, lecz ze względu na to, że dostęp do plików w Javie jest w znacznej części blokujący, obsługa wielu z zapytań została opóźniona przez oczekiwanie na urządzenie wejścia/wyjścia. Najniższy czas odpowiedzi, 248 milisekund, osiągnął JavaScript, a tuż za nim, z wynikiem 639 milisekund Elixir.

\clearpage