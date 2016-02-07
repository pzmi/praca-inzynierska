# Produktywność

**Produktywność** - wielkość efektu produkcyjnego uzyskanego z danych nakładów. \autocite{sjp2015}

## Kod

Mierzenie produktywności nie jest prostym zadaniem, gdyż trudno określić obiektywne kryterium. Na przestrzeni lat opracowano wiele metod wyznaczania produktywności pracy programistycznej. Najprostszą z nich jest liczba napisanych linii kodu. Na potrzeby tej rozprawy wybrano właśnie ją, gdyż nie jest mierzona wielkość wykonanej pracy, a konfrontacja wykonania tego samego zadania w trzech różnych technologiach. 

|              |            | Java | JavaScript | Elixir |
|--------------|------------|-----:|-----------:|-------:|
| Kod          | Logika     | 36   | 35         | 19     |
|              | Serwer     | 55   | 31         | 98     |
|              | Suma       | 91   | 66         | 117    |
| Konfiguracja | Serwer     | 421  | 88         | 22     |
|              | Aplikacja  | 103  | 19         | 24     |
|              | Suma       | 524  | 107        | 46     |
|              |------------|------|------------|--------|
|              | Suma       | 615  | 173        | 163    |

Table: Liczba linii kodu i konfiguracji w podziale na technologie

Powyższa tabela przedstawia liczbę linii kodu i konfiguracji dla implementacji, na bazie których przeprowadzono testy w rozdziale \ref{wydajnoux15bux107}. Przedstawiony stan liczbowy nie zawiera komentarzy ani pustych linijek. Najbardziej wymierną kategorią jest suma linii kodu logiki aplikacyjnej, gdyż jest on niezależny od doboru bibliotek. Nie zawiera on kodu odpowiedzialnego za obsługę żądań, jedynie przeprowadzane operacje i obliczenia, jak transpozycja macierzy czy wczytanie danych z pliku. Pozostałe wartości nie są bez znaczenia, ponieważ charakteryzują środowisko pracy z daną technologią. Liczba linii kodu w przypadku Javy i JavaScriptu jest prawie identyczna. Wynika to z faktu, że składnia obu języków wywodzi się z języka C oraz implementacje w JavaScripcie są translacjami tych z Javy. Różnice polegają głównie na odmiennym sposobie definicji klas, obsłudze modułów i  eksportowaniu funkcji. Kod w języku Java może wydawać się rozwlekły w porównaniu do jego ekwiwalentu w JavaScripcie, ze względu na statyczne typowanie oraz konwencje nazewnictwa. Liczba linii kodu w Elixirze odstaje od dwóch poprzednich. Języki funkcyjne należą do typu deklaratywnego. W przeciwieństwie do języków imperatywnych, jak Java lub JavaScript, operują na wyższym poziome abstrakcji. Operacje są wyrażeniami na zbiorach, nie sekwencją kroków prowadzących do rozwiązania. Najlepszym przykładem jest porównanie funkcji transpozycji macierzy.

~~~~{.Java .numberLines caption="Java - funkcja transpozycji macierzy"}
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
~~~~

~~~~{.Elixir .numberLines caption="Elixir - funkcja transpozycji macierzy"}
def transpose(matrix) do
    matrix |>
    List.zip |>
    Enum.map(&Tuple.to_list(&1))
end
~~~~

Sama pętla for w Javie, przepisująca wartości pomiędzy macierzami, zajmuje 3 linijki (pomijając klamry). W przypadku Elixira, cała funkcja transpozycji macierzy została zapisana w 3 linijkach dla większej czytelności, ten sam kod można zapisać w 1. W drugim z poniższych listingów widać deklaratywność styl, posługiwanie się funkcjami bez definiowania kroków przetwarzania.  
Kod serwera odpowiada za odbieranie zapytań, wywołanie funkcji obliczeń i zwrócenie odpowiedzi. W większym stopniu jest zależny od doboru narzędzi, niż charakterystyki języka programowania. Zapis w Javie opiera się w całości na standardach Java EE. W przypadku JavaScriptu, do obsługi kodu sieciowego, wybrano bibliotekę Express.js. Ma ona być mała i elastyczna, wprowadzając jedynie niewielkie udogodnienia w stosunku do programowania w Node.js. Opis ten jest odzwierciedlony w otrzymanych wynikach. Jak można zauważyć JavaScript posiada najmniej kodu serwerowego. W przeciwieństwie do Express.js, Phoenix Framework jest biblioteką obszerną, lecz jedyną określaną jako stabilną i odpowiednią do zastosowań produkcyjnych jaka istnieje dla języka Elixir na tę chwilę. Pomimo największej liczby linii kodu w tej kategorii, znaczna jego część jest generowana przy tworzeniu projektu. Jednak mimo braku konieczności pisania, programista powinien go znać, aby dostosować do potrzeb systemu, dlatego też został on wliczony do sumy z powyższej tabeli.
Konfiguracja serwera aplikacyjnego w Javie to obszerny plik XML. Znajdują się w nim ustawienia wszystkich komponentów dostępnych na serwerze Wildfly, definiowanych przez standardy Java EE. Serwer w JavaScripcie jest konfigurowany z użyciem samego języka programowania. Jak wspomniano, Express.js jest biblioteką minimalistyczną, opcje są zdefiniowane jedynie dla ograniczonej liczby używanych komponentów. Podobnie jak w przypadku JavaScriptu, w Elixirze ustawienia są zapisane przy użyciu języka programowania. Twórcy Phoenixa przyjęli zasadę *konwencja ponad konfigurację*, w związku z czym opcje ograniczono do minimum.  
Pliki konfiguracyjne aplikacji wszystkich trzech technologii zawierają informacje o projekcie oraz zależnościach. Podobnie jak inne ustawienia, Java używa formatu XML, a Elixir języka programowania. W przypadku JavaScriptu używany jest JSON (JavaScript Object Notation). 

## Biblioteki

Istotnym elementem każdej technologii deweloperskiej jest dostępność bibliotek. Znaczną część pracy można wykonać bez napisania ani jednej linijki kodu, z wykorzystaniem dostępnych publicznie bibliotek. Dzięki temu zyskujemy przetestowaną funkcjonalność, gotową do użycia.
Największym repozytorium bibliotek bazujących na wirtualnej maszynie Javy jest Central Repository\autocite{centralrepository2015}. Istniejąca od 2002 roku baza skupia około 130 tysięcy projektów, które w sumie udostępniły prawie 1,2 miliona artefaktów. Niestety nie są dostępne aktualne statystyki pobrań.\autocite{centralstats2015} Na dorobek Javy składa się praca wielu organizacji patronujących otwartym projektom. Wśród nich znajdują się fundacje jak Apache Software Foundation\autocite{apachefoundation2015} skupiająca ponad 350 projektów Open Source oraz inicjatyw obejmujących szerokie spektrum technologii, czy Eclipse Foundation\autocite{eclipsefoundation2015}, będąca członkiem komitetu Java Community Process. Na rozwój Javy mają również wpływ przedsiębiorstwa w różnych branżach. [zob. \ref{architektura---java}]  
npm, repozytorium modułów Node.js, gromadzi ich prawie 230 tysięcy, licząc ponad 140 milionów pobrań dziennie.\autocite{npm2015} Powszechność JavaScriptu sprzyja powstawaniu nowych projektów, lecz bez wsparcia zorganizowanych podmiotów, tak jak w przypadku Javy, znaczna ich część pozostaje we wczesnej fazie rozwoju lub jest porzucana.  
Ze względu na fakt, że Elixir jest młodym językiem, zbiór dostępnych bibliotek nie jest tak imponujący jak w przypadku dwóch pozostałych ekosystemów. Projekt hex, tworzący manager pakietów w języku Elixir, gromadzi 1384 modułów w 6097 wersjach, które pobrano ponad 100 tysięcy razy dziennie.\autocite{hex2015}