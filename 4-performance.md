# Wydajność

TODO: kod

Wydajność technologii można mierzyć pod wieloma różnymi aspektami, a na otrzymane wyniki wpływa duża liczba czynników. Przedstawiane środowiska programistyczne zostały przetestowane pod kontem wydajności w kilku odmiennych scenariuszach.

Wybrano 4 przypadki w 3 kategoriach:

 - Duża liczba zapytań:
     + zapytania nie wymagające dużej mocy obliczeniowej
 - Czasochłonne obliczenia:
     + obliczenia na prostych liczbach
     + operacje macierzowe
 - Ograniczenia wejścia/wyjścia
     + operacje na systemie plików

Wyżej wymienione sytuacje są powszechnie spotykane we w współczesnych systemach informatycznych.

Badania przeprowadzono na sprzęcie o parametrach:

Maszyna testowa:

 - Procesor: Intel(R) Core(TM)2 Duo CPU L9400 @ 1.86GHz
 - Pamięć: 4GB DDR2 800MHz
 - System operacyjny: GNU/Linux 4.2.5-1-ARCH

Maszyna testująca:

 - Procesor: Intel(R) Core(TM)2 Quad CPU Q9550 @ 2.83GHz
 - Pamięć: 4GB DDR2 800MHz
 - System operacyjny: GNU/Linux 4.2.5-1-ARCH

Na maszynę testującą celowo wybrano komputer o większej mocy, aby zapewnić ciągłość testów i uniknąć komplikacji wynikających z niewystarczającej mocy do analizy danych.  
Komputery podłączono bezpośrednio w sieć o przepustowości 1Gb/s.


## Duża liczba zapytań

W dobie Internetu znaczna cześć aplikacji wykorzystywanych na co dzień korzysta z łączności sieciowej. W ostatnich latach obserwuje się znaczny wzrost na rynku usług zdalnych, a także zwiększenie liczby użytkowników owych usług. Z tego względu współczesne systemy informatyczne muszą być w stanie obsłużyć znaczne liczby jednoczesnych połączeń i zapytań.

Test polega na wykonaniu metody HTTP GET na serwerze zwracającym prosty łańcuch tekstowy. Zasymulowano 350000 użytkowników wykonujących zapytanie niezależnie, rozłożonych na przestrzeni 100 sekund.

### Java

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/simpletest/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

Na połowę zapytań otrzymano odpowiedź w czasie poniżej 800 milisekund. Nieznaczna cześć wysłanych żądań została oznaczona jako błędne.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/simpletest/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu}
\end{figure}

Liczba aktywnych użytkowników przedstawia zapytania oczekujące na odpowiedź w danej chwili czasu. Na wykresie liczba aktywnych użytkowników rośnie w przybliżeniu jednostajnie. Po wysłaniu ostatniego żądania ostatni użytkownik otrzymał odpowiedź po 30 sekundach.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/simpletest/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

Większość czasów odpowiedzi plasuje się na lewym krańcu wykresu. Występują pojedyncze wyjątki, niewielka część przekroczyła maksymalny czas oczekiwania 60 sekund.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/simpletest/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu}
\end{figure}

Wirtualna maszyna Javy potrzebuje czasu na tak zwane *rozgrzanie się*. Wtedy dokonuje automatycznej optymalizacji kodu bajtowego. Zjawisko to można zaobserwować na powyższym wykresie. Na początku testu wiele zapytań zostało oznaczonych jako błędnych, po dokonaniu poprawek przez maszynę wirtualną liczba przyjmowanych zapytań na sekundę ustabilizowała się.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/simpletest/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu}
\label{java:simple:responses}
\end{figure}

Wykres \ref{java:simple:responses} również odzwierciedla proces optymalizacji. W granicy 60 sekundy testu zauważono zwiększoną liczbę błędnych odpowiedzi. Część zapytań przyjętych przed optymalizacją nie została poprawnie przetworzona.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/simpletest/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu}
\label{java:simple:response_percentile}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/simpletest/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu}
\label{java:simple:latency_percentile}
\end{figure}

Rysunki \ref{java:simple:response_percentile},\ref{java:simple:latency_percentile} przedstawiają dane jedynie dla poprawnie przetworzonych zapytań. Czas odpowiedzi jest różnicą czasu otrzymania pełnej odpowiedzi od czasu wysłania zapytania. Opóźnienie stanowi czas, który upłynął od wysłania zapytania do otrzymania pierwszego bajta odpowiedzi. W granicach 20:50:10 zauważono zmianę zarówno w czasie odpowiedzi jak i opóźnieniu. Została ona poprzedzona utratą części przetwarzanych zapytań, wywołaną uruchomieniem odśmiecacza pamięci (ang. *garbage collector*). Po tym zabiegu czasy poprawiły się i zostały zakwalifikowane do niższej kategorii na wykresach percentyli.

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
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

83% zapytań zostało obsłużonych w czasie większym niż 1200 milisekund oraz 4% z całości oznaczono jako błędne.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/simpletest/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu}
\end{figure}

Liczba aktywnych użytkowników rośnie liniowo i po otrzymaniu ostatniego żądania również liniowo spada obsługując oczekujących użytkowników.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/simpletest/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/simpletest/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu}
\end{figure}

Liczba przyjmowanych zapytań na sekundę utrzymuje stały poziom w czasie trwania testu. Zauważono nieznaczne zaburzenia stanowiące nieznaczną część całości.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/simpletest/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu}
\end{figure}

Podobnie jak przyjmowanie, przetwarzanie i czas odpowiedzi na żądania został utrzymany na stałym poziomie. Jednakże liczba zapytań przekroczyła możliwości obsługi, w związku z czym po 60 sekundach zauważono wzrost w ilości błędów.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/simpletest/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu}
\end{figure}

Percentyle czasu odpowiedzi oraz opóźnienia utrzymują się na zbliżonym poziomie w całym czasie trwania testu.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/simpletest/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu}
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
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

Spośród wszystkich zapytań na 93% otrzymano odpowiedzi w czasie mniejszym niż 800ms oraz brak błędów.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/simpletest/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu}
\end{figure}

Liczba aktywnych użytkowników stabilizuje się po 25 sekundach od rozpoczęcia testu.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/simpletest/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/simpletest/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu}
\end{figure}

Zapytania przyjmowano na stałym poziomie po ustabilizowaniu.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/simpletest/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu}
\end{figure}

Wykres liczby odpowiedzi odpowiada wykresowi liczby zapytań, stała liczba odpowiedzi na sekundę i brak błędów.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/simpletest/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu}
\label{elixir:simple:response_percentile}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/simpletest/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu}
\label{elixir:simple:latency_percentile}
\end{figure}

Na \ref{elixir:simple:response_percentile} oraz \ref{elixir:simple:latency_percentile} wyraźnie widać czas stabilizacji aplikacji.

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

Współczesne systemy informatyczne wykonują wiele skomplikowanych operacji. Nie liczy się jedynie możliwość obsługi dużej liczby zapytań, ale także wykorzystanie mocy obliczeniowej sprzętu do wykonywania operacji. Celem tego testu jest sprawdzenie wydajności technologii przy jednoczesnym dostępnie wielu użytkowników jednocześnie testując wsparcie dla dużych liczb. 

Test polega na wykonaniu metody HTTP GET na serwerze zwracającym 100000 element ciągu Fibonacciego. Zasymulowano 1000 użytkowników wykonujących zapytanie niezależnie, rozłożonych na przestrzeni 100 sekund.

### Java

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/fibonacci/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

74% zapytań zostało oznaczonych jako błędne z powodu przekroczenia limitu oczekiwania wynoszącego 60 sekund.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/fibonacci/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/fibonacci/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/fibonacci/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu}
\end{figure}

Po upłynięciu 1/3 testu serwer przestał przyjmować zapytania. Wynika to z przyjętego modelu współbieżności. Każde nadchodzące zapytanie jest obsługiwane w nowym wątku lub jest reużywany wątek używany uprzednio. Przy takim natężeniu wymagających czasowo żądań, osiągnięto limit wykorzystywanych wątków, w związku z czym kolejne nadchodzące zapytania nie mogły zostać przetworzone.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/fibonacci/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/fibonacci/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/fibonacci/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu}
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

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/fibonacci/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

96% zapytań zostało oznaczonych jako błędnych ze względu na przekroczenie czasu żądania wynoszącego 60 sekund. JavaScript nie posiada wsparcia dla dużych liczb. Wykorzystana biblioteka bignum jest implementacją natywną. Ze względu na charakterystykę zadania, wykonywanie jest wiele operacji na dużych liczbach. Z tego powodu silnik V8 języka JavaScript jest zmuszony do wykonywania ciągłych odwołań do natywnego kodu, co znaczenie spowalnia pracę aplikacji.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/fibonacci/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/fibonacci/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/fibonacci/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/fibonacci/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/fibonacci/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/fibonacci/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu}
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

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/fibonacci/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

1/3 zapytań została oznaczona jako błędne ze względu na przekroczenie maksymalnego czasu żądania wynoszącego 60 sekund. Poprawne odpowiedzi otrzymano w czasie powyżej 1200 milisekund. Jedynie nieznaczną część z nich otrzymano poniżej 1200 milisekund.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/fibonacci/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/fibonacci/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/fibonacci/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu}
\end{figure}

W połowie testu obciążony system ograniczył przyjmowanie nadchodzących zapytań czego rezultatem są zwrócone błędy.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/fibonacci/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/fibonacci/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/fibonacci/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu}
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

Test \ref{czasochux142onne-obliczenia} ma za zadanie przetestować dużą liczbę wykonywanych operacji na każde zadanie. Celem tego testu jest porównanie każdej z wybranych technologii w kategorii możliwości manipulowania danymi.

Test polega na wykonaniu metody HTTP POST, w ciele której umieszczono wygenerowaną macierz liczb całkowitych. Zadaniem serwera jest zwrócenie transponowanej macierzy w odpowiedzi. Zasymulowano 10000 użytkowników wykonujących zapytanie niezależnie, rozłożonych na przestrzeni 100 sekund.

### Java

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/matrix/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

Korzystając z implementacji w języku Java żadne z zapytań nie zwróciło błędu. Na 99% żądań odpowiedź otrzymano poniżej 800 milisekund, a jedynie 83 z nich przetworzono powyżej tej granicy.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/matrix/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/matrix/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/matrix/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/matrix/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu}
\end{figure}

Zauważono ubytek, a zaraz po nim skok liczby odpowiedzi na sekundę w początkowej fazie testu. Po początkowej inicjalizacji, każdy nowy użytkownik został obsłużony na bieżąco.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/matrix/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/matrix/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu}
\end{figure}

Wystąpiła mała różnica w czasach odpowiedzi i opóźnienia pomiędzy poszczególnymi zapytaniami w czasie trwania testu, zachowano równy poziom.

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

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/matrix/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

78% ze wszystkich zapytań zostało obsłużonych poniżej 800 milisekund oraz żadne nie przekroczyło granicy czasu odpowiedzi 1200 milisekund.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/matrix/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/matrix/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/matrix/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/matrix/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu}
\end{figure}

Wszystkie żądania przyjęto niezwłocznie do obsługi, zaś wykres czasu odpowiedzi przedstawia niemalże cykliczne skoki. Node.js operuje jednym wątkiem w jednym procesie. W czasie testu system operacyjny próbował starał się zbalansować pracę obydwu dostępnych rdzeni przenosząc obciążenie pomiędzy nimi.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/matrix/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu}
\label{js:matrix:response_percentile}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/matrix/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu}
\label{js:matrix:latency_percentile}
\end{figure}

Na podstawie wykresów \ref{js:matrix:response_percentile} oraz \ref{js:matrix:latency_percentile} można zaobserwować wpływ optymalizacji przetwarzania zapytań przez silnik V8. Czasy odpowiedzi jak i opóźnienie wyraźnie spada w czasie trwania testu.

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

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/matrix/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

Błędne zapytania stanowią 7% całego testu, pozostałe zaś zostały przetworzone w czasie powyżej 1200 milisekund.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/matrix/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/matrix/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/matrix/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu}
\end{figure}

Zapytania zostały przyjęte na stałym poziomie, jednak część zapytań, ze względu na obciążenie została odrzucona, a odpowiedzi na nie przekroczyły maksymalny czas żądania wynoszący 60 sekund.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/matrix/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/matrix/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/matrix/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu}
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

Większość systemów informatycznych korzysta z pewnego rodzaju urządzeń wejścia/wyjścia. Nie licząc urządzenia sieciowego, używanymi interfejsami mogą być system plików czy system zarządzania bazą danych. W tym teście wykorzystano system plików, gdyż jest obsługiwany przez standardową bibliotekę każdej w porównywanych technologii, w przeciwieństwie do komunikacji z bazą danych. 

Test polega na wykonaniu metody HTTP GET na serwerze zwracającym plik tekstowy ze znakami ASCI o rozmiarze 1MB. Zasymulowano 12000 użytkowników wykonujących zapytanie niezależnie, rozłożonych na przestrzeni 100 sekund.

### Java

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/file/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

Nie utracono żadnego żądania i żadna odpowiedź nie została oznaczona jako błędna, lecz 100% z nich otrzymano w czasie większym niż 1200 milisekund.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/file/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu}
\end{figure}

Liczba aktywnych użytkowników rośnie jednostajnie ze względu na oczekiwanie na obsługę poprzedzających zapytań.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/file/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/file/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/file/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu}
\end{figure}

Serwer utrzymał stały poziom obsługi przychodzących połączeń oraz odpowiedzi.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/file/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/file/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu}
\end{figure}

Czas odpowiedzi oraz opóźnienie pokrywają się z liczbą aktywnych użytkowników. Wraz z wzrostem liczby oczekujących zapytań wzrasta czas odpowiedzi oraz opóźnienie. Wystąpiło nieznaczne rozwarstwienie w czasach odpowiedzi w danej chwili czasu testu.

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
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

Serwer na 10% zapytań wysłał odpowiedź w czasie poniżej 800 milisekund, na kolejnych 9% w czasie pomiędzy 800 a 1200 milisekund, zaś pozostałe powyżej 1200 milisekund.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/file/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu}
\end{figure}

Liczba aktywnych użytkowników rośnie jednostajnie ze względu na oczekiwanie na obsługę poprzedzających zapytań.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/file/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/file/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/file/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu}
\end{figure}

Zarówno liczba zapytań jak i odpowiedzi utrzymano na stałym poziomie.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/file/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/file/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu}
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
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

Zaledwie 2% zapytań obsłużono w czasie poniżej 800 milisekund, a 90% całości powyżej 1200 milisekund. Pozostałe żądania trafiły pomiędzy te dwie grupy, a żadne z odpowiedzi nie została oznaczona błędem.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/file/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu}
\end{figure}

Liczba aktywnych użytkowników rośnie jednostajnie ze względu na oczekiwanie na obsługę poprzedzających zapytań.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/file/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/file/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/file/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu}
\end{figure}

Utrzymano stały poziom poziom obsługi połączeń przychodzących oraz przetwarzania odpowiedzi.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/file/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/file/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu}
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
\caption{Wykres średniej liczby zapytań dla prostych zapytań}
\end{figure}

Dla testu dużej liczby prostych zapytań, pod względem średniej liczby zapytań najlepszy wynik Elixir, osiągając wynik 3498,74 żądań na sekundę przy 100% skuteczności odpowiedzi. Zastosowanie modelu aktorowego do obsługi zapytań sprowadza się do oddelegowania każdego przychodzącego żądania do nowego aktora. Ta strategia wypadła lepiej od tej przyjętej w Javie, która zakłada wykorzystywanie wątków systemu operacyjnego do przetwarzania zapytań. Najgorszy wynik otrzymano przy użyciu JavaScript. Średnia liczba otrzymanych błędnych odpowiedzi niewiele różni się pomiędzy Javą i JavaScriptem, lecz przy 74% wydajności JavaScriptu względem Javy.

\begin{figure}[!ht]
\centering
\includegraphics[resolution=120]{test_results/summary/simple_percentage.png}
\caption{Wykres poprawnej wymiany zapytań i odpowiedzi dla prostych zapytań}
\end{figure}

\begin{figure}[!ht]
\centering
\includegraphics[resolution=120]{test_results/summary/simple_response.png}
\caption{Wykres czasu odpowiedzi dla prostych zapytań}
\end{figure}

Jednakże znaczący wpływ w tym przypadku wywarła optymalizacja w czasie wykonywania programu. Czasy pierwszych 20 sekund przetwarzania, chociaż niższe od ekwiwalentnych w Javie i JavaScripcie, są nieporównywalnie wyższe od kolejnych. Wirtualna maszyna Erlanga wykryła powtarzający się wzorzec i stworzyła optymalny kod dla tego przypadku. Powtórne testy wykazały takie same wyniki w każdej z prób. Średni czas odpowiedzi dla Javy i JavaScriptu jest porównywalny z nieznaczącą przewagą pierwszej technologii lecz z kosztem na odchyleniu standardowym ze względu na wyższy czas maksymalny.

\begin{figure}[!ht]
\centering
\includegraphics[resolution=120]{test_results/summary/fib_avg.png}
\caption{Wykres średniej liczby zapytań dla wyliczenia liczby ciągu Fibonacciego}
\end{figure}

Pomimo zbliżonej średniej liczbie zapytań na sekundę pomiędzy Javą i Elixirem w grupie czasochłonnych obliczeń dla przypadku obliczania liczby Fibonacciego Elixir osiągnął najlepszy wynik pod względem średniej liczby zapytań na sekundę oraz odsetka błędnych odpowiedzi. Procent poprawnie przetworzonych zapytań Javy i JavaScriptu, odpowiednio 26% i 4%, jest nieporównywalny z Elixirem przy 75%.

\begin{figure}[!ht]
\centering
\includegraphics[resolution=120]{test_results/summary/fib_percentage.png}
\caption{Wykres poprawnej wymiany zapytań i odpowiedzi dla wyliczenia liczby ciągu Fibonacciego}
\label{summary:fib:response}
\end{figure}

\begin{figure}[!ht]
\centering
\includegraphics[resolution=120]{test_results/summary/fib_response.png}
\caption{Wykres czasu odpowiedzi dla wyliczenia liczby ciągu Fibonacciego}
\end{figure}

Czasy odpowiedzi dla każdej z trzech testowanych technologii plasują się na podobnym poziomie, z różnicami jedynie w minimalnych czasach odpowiedzi. Jednakże rysunek \ref{summary:fib:response} przedstawia wyniki jedynie dla odpowiedzi poprawnych. W przypadku technologii Java i JavaScript wyniki mogą stanowić źródło nieprawdy, gdyż mała cześć całości żądań testu została przetworzona poprawnie.

\begin{figure}[!ht]
\centering
\includegraphics[resolution=120]{test_results/summary/matrix_avg.png}
\caption{Wykres średniej liczby zapytań dla transpozycji macierzy}
\end{figure}

W przypadku transpozycji macierzy Java oraz JavaScript uzyskały niemalże wyniki. Rozwiązania z wykorzystaniem obu technologii obsłużyły poprawnie wszystkie zapytania z wynikiem około 100 zapytań na sekundę. 

\begin{figure}[!ht]
\centering
\includegraphics[resolution=120]{test_results/summary/matrix_percentage.png}
\caption{Wykres poprawnej wymiany zapytań i odpowiedzi dla transpozycji macierzy}
\end{figure}

\begin{figure}[!ht]
\centering
\includegraphics[resolution=120]{test_results/summary/matrix_response.png}
\caption{Wykres czasu odpowiedzi dla transpozycji macierzy}
\end{figure}

W kategorii czasu odpowiedzi Java wypadła lepiej od JavaScript ze średnim czasem 162 milisekund przeciwko 644 milisekundom. Jednakże dla tego testu wyniki Elixira są znaczenie gorsze od dwóch pozostałych technologii osiągając średni czas odpowiedzi równy 22038 milisekund oraz tracąc 7% zapytań. Tak znaczące pogorszenie w stosunku do poprzednich testów wynika z przyjętego modelu obliczeń. Model aktorowy, który uprzednio stanowił atut jest przyczyną dużych czasów odpowiedzi. Z powodu tego, że lekkie procesy w wirtualnej maszynie Erlanga nie współdzielą stanu, wszystkie dane pomiędzy nimi są kopiowane powodując znaczne opóźnienia. Dodatkowo, proces transpozycji macierzy, polegający na przekształceniach struktur, wymaga wykonywania kolejnych kopii danych. Wynika to z faktu, że Elixir jest funkcyjnym językiem programowania, w którym z założenia wszelkie struktury danych są niezmienne.  

\begin{figure}[!ht]
\centering
\includegraphics[resolution=120]{test_results/summary/file_avg.png}
\caption{Wykres średniej liczby zapytań dla odczytu pliku}
\end{figure}

W przypadku odczytu pliku wszystkie zapytania i odpowiedzi zostały obsłużone w 100 procentach.

\begin{figure}[!ht]
\centering
\includegraphics[resolution=120]{test_results/summary/file_response.png}
\caption{Wykres czasu odpowiedzi dla odczytu pliku}
\end{figure}

Java uzyskała bardzo stabilne wyniki, wydajnościowo test nie stanowił problemu, lecz ze względu na to, że dostęp do plików w Javie jest w znacznej części blokujący, obsługa wielu zapytań czekała na urządzenie wejścia/wyjścia. Najniższy czas odpowiedzi, 248 milisekund, osiągnął JavaScript, a tuż za nim, z wynikiem 639 milisekund Elixir. Ze względu na to Node.js jest dobrze uwarunkowany do zadań wymagających nieznacznej mocy obliczeniowej oraz bardzo szybkiego dostępu do dysku i czasu odpowiedzi. Przykładem zastosowania tych atutów są między innymi serwery udostępniające dane strumieniowo.

\clearpage