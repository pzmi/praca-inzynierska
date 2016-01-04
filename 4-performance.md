# Wydajność

TODO: opis kodu i wykresów, tabelki, podsumowania, wnioski

Wydajność technologii można mierzyć pod wieloma róznymi aspektami, a na otrzymane wyniki wpływa duża liczba czynników. Przedstawiane środowiska programistyczne zostały przetestowane pod kontem wydajności w kilku odmiennych scenariuszach.  

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

W dobie Internetu znaczna cześć aplikacji wykorzystywanych na codzień korzysta z łączności sieciowej. W ostatnich latach obserwuje się znaczny wzrost na rynku usług zdalnych, a także zwiększenie liczby użytkowników owych usług. Z tego względu współczesne systemy informatyczne muszą być w stanie obsłużyć znaczne liczby jednoczesnych połączeń i zapytań.

Test polega na wykonaniu metody HTTP GET na serwerze zwracającym prosty łańcuch tekstowy. Zasymulowano 350000 użytkowników wykonujących zapytanie niezależnie, rozłożonych na przestrzeni 100 sekund.

### Java

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/simpletest/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

Na połowę zapytań otrzymano odpowiedź w czasie poniżej 800 milisekund. Nieznaczna cześć wysłanych rządań została oznaczona jako błędne.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/simpletest/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu}
\end{figure}

Liczba aktywnych użytkowników przedstawia zapytania oczekujące na odpowiedź w danej chwili czasu. Na wykresie liczba aktywnych użytkowników rośnie w przybliżeniu jednostannie. Po wysłaniu ostatniego rządania ostatni użytkownik otrzymał odpowiedź po 30 sekundach.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/simpletest/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

Większość czasów odpowiedzi plasuje się na lewym krańcu wykresu. Występują pojedyncze wyjątki, niewielka część przekroczyła maksymalny czas oczekiwania 60 sekund.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/simpletest/screenshots/requests.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
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

Rysunki \ref{java:simple:response_percentile, java:simple:latency_percentile} przedstawiają dane jedynie dla poprawnie przetworzonych zapytań. Czas odpowiedzi jest różnicą czasu otrzymania pełnej odpowiedzi od czasu wysłania zapytania. Opóźnienie stanowi czas, który upłynął od wyzłania zapytania do otrzymania pierwszego bajta odpowiedzi. W granicach 20:50:10 zauważono zmianę zarówno w czasie odpowiedzi jak i opóźnieniu. Została ona poprzedzona utratą części przetwarzanych zapytań, wywołaną uruchomieniem odśmiecacza pamięci (ang. *garbage collector*). Po tym zabiegu czasy poporawiły się i zostały zakwalifikowane do niższej kategorii na wykresach percentyli.

\clearpage

### JavaScript

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/simpletest/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/simpletest/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/simpletest/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/simpletest/screenshots/requests.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/simpletest/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/simpletest/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/simpletest/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/simpletest/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu}
\end{figure}

\clearpage

### Elixir

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/simpletest/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/simpletest/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/simpletest/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/simpletest/screenshots/requests.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/simpletest/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/simpletest/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/simpletest/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/simpletest/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu}
\end{figure}

\clearpage

## Czasochłonne obliczenia

TODO: opis kodu, rozszerzyć opis rozdziału
Aplikacja wykonująca bardziej wymagające operacje z większym romiarem danych, np. obliczanie silni dla dużych liczb, transponowanie macierzy.

### Java

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/fibonacci/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

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
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/fibonacci/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie trwania testu}
\end{figure}

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

\clearpage

### JavaScript

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/fibonacci/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

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
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/fibonacci/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie trwania testu}
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

\clearpage

### Elixir

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/fibonacci/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

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
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/fibonacci/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie trwania testu}
\end{figure}

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

\clearpage

### Operacje na zbiorach danych

### Java

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/matrix/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

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
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/matrix/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/matrix/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu}
\end{figure}

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

\clearpage

### JavaScript

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/matrix/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

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
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/matrix/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/matrix/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/matrix/screenshots/response_percentile.png}
\caption{Wykres percentyli czasu odpowiedzi w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/matrix/screenshots/latency_percentile.png}
\caption{Wykres percentyli opóźnienia w czasie trwania testu}
\end{figure}

\clearpage

### Elixir

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/matrix/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

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
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/matrix/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie trwania testu}
\end{figure}

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

\clearpage

## Ograniczenia wejścia/wyjścia

TODO: opis kodu, rozszerzyć opis rozdziału
Wsparcie dla operacji we/wy, np. zapis i odczyt z bazy danych (albo z pliku)

### Java

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/file/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/file/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/file/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/file/screenshots/requests.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}


\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/file/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/java/file/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu}
\end{figure}

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

\clearpage

### JavaScript

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/file/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/file/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/file/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/file/screenshots/requests.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/file/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/js/file/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu}
\end{figure}

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

\clearpage

### Elixir

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/file/screenshots/response_times.png}
\caption{Wykres czasu odpowiedzi na zapytania}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/file/screenshots/active_users.png}
\caption{Wykres aktywnych użytkowników w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/file/screenshots/distribution.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/file/screenshots/requests.png}
\caption{Wykres rozkładu czasu odpowiedzi w czasie testu}
\end{figure}


\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/file/screenshots/requests.png}
\caption{Wykres liczby zapytań na sekundę w czasie trwania testu}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{test_results/elixir/file/screenshots/responses.png}
\caption{Wykres liczby odpowiedzi na sekundę w czasie trwania testu}
\end{figure}

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

\clearpage

## Wnioski

TODO: Porównanie otrzymanych wyników.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=120]{test_results/summary/fib_avg.png}
\caption{Wykres średniej liczby zapytań dla wyliczenia liczby ciągu Fibonacciego}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=120]{test_results/summary/fib_percentage.png}
\caption{Wykres poprawnej wymiany zapytań i odpowiedzi dla wyliczenia liczby ciągu Fibonacciego}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=120]{test_results/summary/fib_response.png}
\caption{Wykres czasu odpowiedzi dla wyliczenia liczby ciągu Fibonacciego}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=120]{test_results/summary/file_avg.png}
\caption{Wykres średniej liczby zapytań dla odczytu pliku}
\end{figure}

W przypadku odczytu pliku wszystkie zapytania i odpowiedzi zostały obsłużone w 100 procenatach.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=120]{test_results/summary/file_response.png}
\caption{Wykres czasu odpowiedzi dla odczytu pliku}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=120]{test_results/summary/matrix_avg.png}
\caption{Wykres średniej liczby zapytań dla transpozycji macierzy}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=120]{test_results/summary/matrix_percentage.png}
\caption{Wykres poprawnej wymiany zapytań i odpowiedzi dla transpozycji macierzy}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=120]{test_results/summary/matrix_response.png}
\caption{Wykres czasu odpowiedzi dla transpozycji macierzy}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=120]{test_results/summary/simple_avg.png}
\caption{Wykres średniej liczby zapytań dla prostych zapytań}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=120]{test_results/summary/simple_percentage.png}
\caption{Wykres poprawnej wymiany zapytań i odpowiedzi dla prostych zapytań}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[resolution=120]{test_results/summary/simple_response.png}
\caption{Wykres czasu odpowiedzi dla prostych zapytań}
\end{figure}

\clearpage