# Produktywność

**Produktywność** - wielkość efektu produkcyjnego uzyskanego z danych nakładów. \autocite{sjp}

Mierzenie produktywności nie jest prostym zadaniem, gdyż trudno określić obiektywną miarę. Na przestrzeni lat opracowano wiele metod wyznaczania produktywności pracy programisty. Najprostszą z nich jest liczba napisanych linii kodu. Na potrzeby tej rozprawy wybrano właśnie tę miarę, gdyż nie jest mierzona wielkość wykonanej pracy, a konfrontacja wykonania tego samego zadania w trzech różnych technologiach. 

|              |            | Java | JavaScript | Elixir |
|--------------|------------|------|------------|--------|
| Kod          | Logika     | 36   | 35         | 19     |
|              | Serwer     | 55   | 31         | 98     |
|              | Suma       | 91   | 66         | 117    |
| Konfiguracja | Serwer     | 421  | 88         | 22     |
|              | Aplikacja  | 103  | 19         | 24     |
|              | Suma       | 524  | 107        | 46     |
|              |------------|------|------------|--------|
|              | Suma       | 615  | 173        | 163    |

Table: Liczba linii kodu i konfiguracji w podziale na technologie

Powyższa tabela przedstawia liczbę linii kodu i konfiguracji dla implementacji, na bazie których przeprowadzono testy w rozdziale \ref{wydajnoux15bux107}. Przedstawiony stan liczbowy nie zawiera komentarzy ani pustych linijek. Najbardziej wymierną miarą jest kod przeprowadzanych logiki aplikacyjnej, gdyż jest on niezależny od doboru bibliotek. Nie zawiera on kodu odpowiedzialnego za obsługę żądań, jedynie przeprowadzane operacje i obliczenia, przykładowo transpozycja macierzy czy wczytanie danych z pliku. Pozostałe wartości nie są bez znaczenia, ponieważ charakteryzują środowisko pracy z daną technologią. Liczba linii kodu w przypadku Javy i JavaScriptu jest prawie identyczna. Wynika to z faktu, że składnia obu języków wywodzi się z języka C. Implementacje w JavaScripcie są translacjami tych z Javy, więc różnice są niewielkie. Różnice polegają głównie w klas, obsłudze modułów i  eksportowaniu funkcji. Kod w języku Java może wydawać się rozwlekły w porównaniu do jego ekwiwalentu w JavaScripcie, ze względu na statyczne typowanie oraz konwencje nazewnictwa. Liczba linii kodu w Elixirze odstaje od dwóch poprzednich. Języki funkcyjne należą do typu deklaratywnego. W przeciwieństwie do języków imperatywnych, jak Java lub JavaScript, operują na wyższym poziome abstrakcji. Operacje są wyrażeniami na zbiorach, nie sekwencją kroków prowadzących do rozwiązania. Najlepszym przykładem jest porównanie funkcji transpozycji macierzy.

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

Sama pętla for w Javie, przepisująca wartości pomiędzy macierzami, zajmuje 3 linijki (pomijając klamry). W przypadku Elixira, cała funkcja transpozycji macierzy została zapisana w 3 linijkach dla większej czytelności, ten sam kod można zapisać w 1 linii. W drugim z poniższych listingów widać deklaratywny styl, posługiwanie się funkcjami bez definiowania kroków przetwarzania.
Kod serwera odpowiada za odbieranie zapytań, wywołanie funkcji obliczeń i zwrócenie odpowiedzi. W większym stopniu jest zależny od doboru narzędzi, niż charakterystyki języka programowania. Zapis w Javie wynika w całości ze standardów Java EE. W przypadku JavaScriptu wybrano bibliotekę Express.js. Ma ona być mała i elastyczna, wprowadzając jedynie niewielkie udogodnienia w stosunku do programowania w Node.js. Opis ten jest odzwierciedlony w otrzymanych wynikach, jak można zauważyć JavaScript posiada najmniej kodu serwerowego. W przeciwieństwie do Express.js, Phoenix Framework jest biblioteką obszerną, lecz, w obecnej chwili, jedyną określaną jako stabilną i odpowiednią do zastosowań produkcyjnych jaka istnieje dla języka Elixir. Pomimo największej liczby linii kodu w tej kategorii, znaczna jego część jest generowana przy tworzeniu projektu. Jednak pomimo braku konieczności pisania go, programista powinien go znać, aby dostosować go potrzeb systemu, dlatego też został on zawarty w powyższej tabeli.
Konfiguracja serwera aplikacyjnego w Javie to obszerny plik XML. Znajdują się w nim ustawienia wszystkich komponentów dostępnych na serwerze Wildfly, definiowanych przez standardy Java EE. Serwer w JavaScripcie jest konfigurowany z użyciem samego języka. Jak wspomniano, Express.js jest biblioteką minimalistyczną, opcje są zdefiniowane jedynie dla ograniczonej liczby używanych komponentów. Podobnie jak w przypadku języka JavaScript, w Elixir ustawienia są zapisane przy użyciu samego języka programowania. Twórcy Phoenixa przyjęli zasadę *konwencja ponad konfigurację*, w związku z czym pliki opcje konfiguracyjne ograniczono do minimum.
Pliki konfiguracyjne wszystkich trzech technologii zawierają informacje o projekcie oraz zależnościach. Podobnie jak inne ustawienia, w Javie jest w formacie XML, a w Elixirze w języku programowania. W przypadku JavaScriptu używany jest JSON (JavaScript Object Notation). 

TODO: Ilość linii kodu i linii konfiguracji. Środowisko programisty, dostępność narzędzi i bibliotek.

## Java

mvnrepository, jcp, apache, eclipse

## JavaScript

npm

## Elixir

hex

## Wnioski