
# Architektura systemu informatycznego

Złożoność systemów informatycznych stale rośnie. Wraz ze złożonością zwiększa się ich zapotrzebowanie na moc obliczeniową. Biorąc pod uwagę spowalniające prawo Moore'a, zaspokojenie potrzeby zwiększenia mocy jest znacznie utrudnione. Rozwiązaniem tego problemu jest stosowanie architektur równoległych, procesorów wielordzeniowych i układów wieloprocesorowych. Wzrost zainteresowania komputerami wielordzeniowymi niesie ze sobą narzut na programistów, zmuszając ich do tworzenia oprogramowania współbieżnego. Taki kod jest znacznie trudniejszy do analizy, ponieważ poza kontekstem aktualnie wykonywanej sekwencji kodu należy wziąć pod uwagę synchronizację z innymi wątkami. Dużo trudniej jest nadążyć za zbiorem częściowo uporządkowanych operacji wykonywanych współbieżnie niż programem sekwencyjnym. Dodatkowym utrudnieniem jest problem pamięci współdzielonej. Dominującym modelem programowania współbieżnego jest wykorzystanie pamięci dzielonej pomiędzy wiele, działających paralelnie wątków. Jeżeli co najmniej dwa z nich jednocześnie próbują uzyskać dostęp jednego obszaru pamięci pojawia się zjawisko wyścigu, które prowadzi do niespójności i uszkodzenia danych. Istnieją metody zapobiegania takim sytuacjom, najprostsza z nich to używanie blokad przy dostępie do współdzielonego obszaru pamięci. Jednakże, takie podejście jest nienaturalne dla deweloperów, bardzo łatwo popełnić błąd. Blokady wprowadzają nowe klasy problemów jak deadlocki i livelocki. Prowadzi to do powstawania oprogramowania nieodpornego na błędy, które trudno skalować. Ciągle powstają narzędzia oraz nowe modele współbieżności, które mają ułatwić pracę programistom, pomagające rozwiązać wymienione problemy z blokadami \autocite{stutter2005software, lee2006problem}.  
Problem rosnącego zapotrzebowania na moc obliczeniową można rozwiązać również poprzez zastosowanie systemów rozproszonych. Za tym podejściem przemawia wiele czynników: geograficzne rozdystrybuowanie źródeł i ujść informacji, wymagania niższego czasu rekcji, niższa cena komputerów, zwiększona niezawodność, itp.
Z drugiej strony tworzenie systemów rozproszonych niesie ze sobą te same ograniczenia i problemy dostępu do współdzielonych zasobów jak wykorzystanie pamięci współdzielonej. Dodatkową komplikacją w tym przypadku jest tworzenie algorytmów korzystających z wielu maszyn jednocześnie. Klasycznym podejściem jest wykorzystanie czasu jako podstawy opracowywania algorytmów synchronizacji. Wprowadzenie dodatkowego czynnika jakim jest czas wynika z opóźnień powstałych w na etapie komunikacji pomiędzy procesami działającymi na odrębnych maszynach, jednakże dodatkowa zmienna znacznie zwiększa złożoność i nakład pracy \autocite{lamport1978time}.

## Współczesne trendy 

### Architektura mikroserwisowa

Architektura mikroserwisowa ostatnimi czasy jest częstym tematem pojawiającym się przy w kontekście projektowania systemów informatycznych.  
Mikroserwisoway styl architektoniczny reprezentuje podejście do wytwarzania oprogramowania jako zboru małych usług, każda działająca jako osobny proces, porozumiewające się za pomocą lekkich protokołów, gdzie częstym wyborem jest HTTP. Usługi te są zbudowane wokół funkcjonalności biznesowych i każda z nich jest niezależnie wdrażana przez zautomatyzowane systemy wdrożeniowe. Założeniem jest, aby usługi wykorzystywały narzędzia scentralizowanego zarządzania w jak najmniejszym stopniu. Każda z implementacji jak i wykorzystywane narzędzia mogą wykorzystywać różne języki programowania i technologie.  

\begin{figure}[!ht]
\centering
\includegraphics[resolution=500]{graphics/microservice-example.png}
\caption{Przykład projektu systemu w architekturze mikroserwisowej\autocite{bastani2015springcloud}}
\end{figure}

Nie ma formalnej definicji architektury mikroserwisowej, lecz są pewne cechy charakterystyczne, które często pojawiają się w tego typu systemach.  
Usługi często są wykorzystywane jako reużywalne komponenty. Każdy z nich może być uruchomiony niezależnie i wprowadzanie w nich zmian nie prowadzi do ponownego wdrożenia całości aplikacji, a jedynie jednej z jej części. 
Nie tylko technologia programowania jest niezależna od architektury, to samo tyczy się trwałych składowisk danych. Usługi nie powinny dzielić jednej bazy danych, tak aby każda z nich była niezależna. Nic nie stoi na przeszkodzie, aby wykorzystać różne technologie przechowywania danych, przykładowo bazę danych relacyjną oraz NoSQL w jednym systemie informatycznym.  
Taki podział systemu wymaga mechanizmów zewnętrznej komunikacji pomiędzy usługami, których koszt jest dużo wyższy od wywołań wewnątrz aplikacji. W związku z tym funkcjonalności i odpowiedzialności muszą być odpowiednio zaprojektowane i wydzielone, aby zminimalizować konieczność komunikacji pomiędzy komponentami, co wiąże się z dodatkowymi nakładami na projektowanie.
Również metody komunikacji odgrywają duże znaczenie. W przeszłości do komunikacji rozproszonych systemów wykorzystywana różne technologie i podejście. Dobrym przykładem jest Korporacyjna Szyna Usług (ang. *Enterprise Service Bus*), która skupia wiele skomplikowanych mechanizmów zarządzania usługami, trasowania wiadomości i transformacji danych. Społeczność wspierająca mikroserwisy proponuje wykorzystywanie prostych, lekkich rozwiązań komunikacyjnych. W tym celu często jest stosowany protokół HTTP w zastosowaniu interfejsów REST. \autocite{fowler2014microservice, fowler2015microservices, newman2015building}

## Java

Architektura złożonych systemów pisanych w Javie jest silnie związana z Javą Enterprise Edition, gdyż definiuje ona szereg standardów dla tworzenia logiki aplikacyjnej. Proces, w którym definiowane są owe standardy, jest przeprowadzany w ramach Java Community Process. Członkami komitetu, jak również osobami zabierającymi głos przy tworzeniu propozycji, jest społeczność użytkowników Javy i specjaliści w tej dziedzinie. Wielu z nich to przedstawiciele przedsiębiorstw aktywnie wykorzystujących te technologie, np. Credit Suisse, Ericsson, Fujitsu, IBM czy Intel\autocite{jcp2015}. Poprzez wkład tych i wielu innych firm Java Enterprise Edition jest powszechnie wykorzystywana między innymi w branży finansowej czy IT do tworzenia oprogramowania biznesowego. 

### Architektura wielowarstwowa

Java EE definiuje architekturę tworzonych usług jako wielowarstwową aplikację, mającą zapewnić skalowalność, dostępność oraz łatwość zarządzania niezbędną dla systemów biznesowych. Przyjmując takie założenia autorzy Javy EE podzielili logikę aplikacji na komponenty w zależności od ich funkcji. Dzięki temu podziałowi możliwe jest rozdystrybuowanie systemu poprzez umieszczenie każdej z warstw na osobnej maszynie.  
Przewidziano następujące komponenty:

 - warstwa kliencka na komputerze użytkownika,
 - warstwa webowa na serwerze Java EE, 
 - warstwa biznesowa na serwerze Java EE,
 - baza danych na serwerze bazodanowym.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=150]{graphics/multitiered-application.png}
\caption{Architektura wielowarstwowa \autocite{jendrock2014jee}}
\end{figure}

Model ten jest powszechnie stosowany nie tylko dla aplikacji w Javie, ale również przy użyciu wielu innych technologii. \autocite{eisele2015modern, jendrock2014jee}

## JavaScript

Biorąc pod uwagę fakt, że JavaScript został stworzony do zastosowań w aplikacjach klienckich, środowisko to nie posiada ustandaryzowanych wzorców projektowania i tworzenia systemów informatycznych. Ze względu na dużą i różnorodną społeczność wielu programistów o odmiennym podłożu zawodowym, nieustannie powstaje wiele bibliotek i tworzonych jest wiele modeli aplikacyjnych, lecz jak dotąd nie wyłonił się z nich żaden dominujący paradygmat. Jedynym wspólnym ich elementem jest Node.js, lecz biblioteka ta nie dyktuje modeli ani wzorców architektonicznych poza posługiwaniem się zdarzeniami i odwołaniami obsługi tychże.    
Programowanie w JavaScript w dużej mierze opiera się na obsłudze zdarzeń. Łatwo to zauważyć na przykładzie aplikacji przeglądarkowych, gdzie zdarzenia są wywoływane przez interakcje użytkownika z interfejsem, na przykład kliknięcia myszy czy przeciąganie obiektów. Z perspektywy projektu języka programowania w JavaScript wprowadzono ułatwienia dla programowania sterowanego zdarzeniami (ang. *event-driven programming*). Najważniejszym z nich jest wprowadzenie funkcji wyższego rzędu. Dzięki nim możliwe jest przekazywanie jako parametrów funkcji innych funkcji jako odwołania do wykonanej akcji.

~~~~{.JavaScript .numberLines caption="Obsługa zdarzeń kliknięcia"}
function handleClick() {
    alert("Button clicked!");
};

var button = document.getElementById("button");
button.addEventListener("click", handleClick);
~~~~

W linijce 6 powyższego listingu do obiektu button została dodana obsługa zdarzenia. Jako pierwszy parametr metody *addEventListener* przekazano typ akcji - kliknięcie (*"click"*) oraz drugi parametr będący nazwą funkcji, która zostanie wykonana przy wykonaniu zdefiniowanej akcji.

### libuv

libuv jest to natywna biblioteka stanowiącą warstwę abstrakcji nad różnymi urządzeniami wejścia/wyjścia do wykonywania na nich asynchronicznych operacji. Została zaprojektowana z myślą o Node.js, lecz znalazła zastosowanie w innych projektach.  
W skład jej możliwości wchodzą:

 - asynchroniczna obsługa połączeń sieciowych poprzez TCP oraz UDP
 - asynchroniczna obsługa plików oraz operacji na systemie plików
 - zdarzenia systemu plików
 - komunikacja między procesowa
 - procesy pomne
 - pula wątków
 - obsługa przerwań
 - zegar wysokiej rozdzielczości
 - obsługa wątków i ich synchronizacja

libuv udostępnia użytkownikom 2 interfejsy do pracy z wejściem/wyjściem: uchwyt (ang. *handle*) oraz zapytanie (ang. *request*).  
Uchwyty stanowią obiekty o długim czasie życia, zdolne do przeprowadzania pewnych operacji w czasie aktywności, przykładowo uchwyt może implementować przyjmowanie połączeń na serwerze TCP i być aktywowany za każdym razem gdy pojawia się nowe połączenie.  
Zapytanie reprezentuje operacje o krótkim czasie życia. Mogą być wywoływane w cyklu obsługi uchwytu lub samodzielnie. Powyższe abstrakcje służą użytkownikom do interakcji z pętlą zdarzeń (ang. *event loop*).  
Pętla wejścia/wyjścia lub też pętla zdarzeń jest kluczową częścią libuv. Odpowiada ona za przetwarzanie wszystkich operacji związanych z wejściem/wyjściem, używając niecodziennego, jednowątkowego asynchronicznego obsługi tychże operacji. Wszystkie działania sieciowe wykonywane są w jednym wątku posługując się nieblokującymi gniazdami (ang. *socket*), które są cyklicznie odpytywane.  
W przeciwieństwie do sieciowego wejścia/wyjścia, obsługa plików jest bazowana na blokującym (synchronicznym) dostępie wykorzystującym pulę wątków. Każdy wątek z puli może niezależnie przetwarzać operacje na pliku.  
Takie podejście do równoległości jest przykładem wzorca *Reaktor*.

### Wzorzec Reaktor

Wzorzec Reaktor jest zaprojektowany do obsługi zapytań przychodzących równolegle do systemu z jednego lub więcej klientów. Każda funkcjonalność systemu jest reprezentowana przez osobne jednostki przetwarzania odpowiedzialne za obsługę jedynie zapytań przeznaczonych dla nich. Za podział zapytań pomiędzy jednostki przetwarzania odpowiedzialny jest synchroniczny demultiplekser.  
Kluczowymi elementami wzorca Reaktor są: uchwyty, demultiplekser zdarzeń (ang. *event demultiplexer*), dyspozytor wejściowy (ang. *initiation dispatcher*) oraz jednostki obsługi zdarzeń (ang. *event handler*).  
Uchwyty są zasobami zarządzanymi przez system operacyjny. Wśród nich znajdują się między innymi połączenia sieciowe czy otwarte pliki.  
Synchroniczny demultiplekser zdarzeń blokuje nadchodzące zdarzenia w oczekiwaniu na uchwyty i zwalnia blokadę kiedy operacja może zostać przeprowadzona na uchwycie bez potrzeby blokowania.  
Dyspozytor wejściowy definiuje interfejs do rejestracji, derejestracji i dyspozycji jednostek obsługi zdarzeń. Dyspozytor jest informowany o nowych zdarzeniach w systemie, w wyniku czego wybiera odpowiednią jednostkę obsługi zdarzenia do otrzymanej akcji.  
Jednostka obsługi zdarzeń implementują logikę przetwarzania przychodzących zdarzeń. System rejestruje takie jednostki w dyspozytorze wejściowym dla konkretnych typów zdarzeń. Kiedy jedno z nich zostanie odebrane, dyspozytor rozwiązuje odpowiednią jednostkę obsługi zdarzeń i wywołuje jej kod obsługi.

\begin{figure}[htbp]
\centering
\input{graphics/handle-event.pdf_tex}
\caption{Sekwencja działania Reaktora}
\end{figure}

System rejestrując jednostkę obsługi zdarzeń w dyspozytorze zaznacza o jakich typach zdarzeń ma ona być powiadamiana, gdy ono wystąpi na powiązanym uchwycie. Po zarejestrowaniu wszystkich jednostek obsługi zdarzeń startowana jest pętla obsługi zdarzeń (ang. *event loop*) dyspozytora. Uchwyty zostają powiązane z zarejestrowanymi z jednostkami obsługi, a demultiplekser czeka na zdarzenia przychodzące na uchwytach. Po nadejściu jednego z nich demultiplekser zawiadamia dyspozytora, że uchwyt jest gotowy do rozpoczęcia przetwarzania danych. Ten z kolei, używając typu źródła zdarzenia, wybiera jednostkę obsługi i wywołuje jej kod.  
Takie podejście pociąga za sobą szereg zalet jak i wad. Przede wszystkim zapewnia łatwą kontrolę nad współbieżnością. Reaktor kolejkuje zdarzenia na poziomie demultipleksowania i delegacji pracy do jednostek obsługi. Jest to zwykle wystarczające, aby wyeliminować potrzebę stosowania bardziej skomplikowanych metod synchronizacji i blokad w aplikacji. Dodatkowo wzorzec ten ułatwia rozdzielenie odpowiedzialności pomiędzy komponenty systemu. Demultipleksowanie oraz delegacja jest niezależna od aplikacji i może być reużywana w różnych projektach. Część funkcjonalna systemu jest rozdzielona pomiędzy jednostki obsługi zdarzeń i każda z nich jest odpowiedzialna za obsługę konkretnych typów zapytań.  
Jednakże ceną przetwarzania jednowątkowego jest brak możliwości wywłaszczenia wątku, jednostki obsługi zdarzeń wykonują pracę nieprzerwanie. Z tego wynika, że żadne z nich nie powinno wykonywać blokujących operacji, ponieważ w takim przypadku jeden zablokowałby cały proces ograniczając responsywność systemu. Co więcej, aplikacje napisane z wykorzystaniem wzorca Rektor mogą być trudniejsze do analizy i rozwiązywania błędów, ze względu na odwrócony proces przepływu sterowania. Implementacja tego wzorca jest ograniczona ze względu na możliwości systemu operacyjnego, który musi wspierać nieblokujące operacje. Ten problem można obejść wykorzystując wiele wątków, w których przetwarzanie odbywa się w sposób blokujący, jednak wyzbywając się korzyści wynikających z braku przełączania kontekstu.\autocite{schmidt1995reactor}

## Elixir

Erlang, a zatem i Elixir, to nie tylko języki programowania, ale również zestaw narzędzi i wzorców programistycznych zwanych *Open Telecom Platform* (OTP). 

### Open Telecom Platform

Mimo swojej nazwy, OTP jest zbiorem bibliotek ogólnego zastosowania, wprowadzający standardowe rozwiązania dla powszechnych problemów. Dodatkowo zawiera narzędzia do rozproszonej komunikacji, wykrywania błędów czy przeładowywania kodu działającego systemu. OTP wprowadza struktury generyczne dla różnych projektów informatycznych, które mają ułatwić pracę programistom, przykładowo standaryzowanej struktury plików projektowych, standardową bibliotekę powszechnie stosowanych funkcjonalności oraz zbiór tzw. behaviour (ang. *zachowanie*) będących wzorcami projektowymi dla różnorodnych systemów. Dzięki temu nowy pracownik zespołu może zauważyć znane wzorce, co ułatwia zapoznanie się z istniejącą bazą kodu.  
Podejście do współbieżności w Erlangu/OTP znacznie różni się od powszechnie stosowanego modelu dzielonej pamięci z blokadami. W tym przypadku wykorzystywany są lekkie procesy zarządzane przez wirtualną maszynę. Procesy te są od siebie całkowicie odizolowane, nie jest wykorzystana dzielona pamięć. Ze względu na taką separacje, komunikacja pomiędzy procesami odbywa się poprzez przesyłane między sobą wiadomości (ang. *message passing*). Dzielone informacje są kopiowane i przesyłane do innego procesu. Dzięki temu nie jest możliwa wielodostępowa modyfikacja danych, co zapobiega powstawaniu anomalii. Jednakże takie podejście nie jest bez wad, gdyż powielanie dużych bloków pamięci może być kosztowne.[patrz \ref{model-aktorowy}]  
W celu zapewnienia wysokiej niezawodności i odporności na błędy wprowadzone zostało jedno z ważniejszych *zachowań* OTP, "Supervisor" (ang. *nadzorca*). Jest on odpowiedzialny za tworzenie i monitorowanie stanu procesów wykonawczych. W sytuacji gdy proces wykonawczy, w wyniku błędu, przerwie pracę, wtedy nadzorca jest w stanie przywrócić poprawne funkcjonowanie systemu przywracając wykonawcę do normalnego stanu. Nadzorcy, będąc jedynie typem zachowania, mogą być traktowani jako zwykłe procesy wykonawcze, a zatem ich stan może być monitorowany przez innego nadzorcę tworząc w drzewa nadzorcze.  

\begin{figure}[htbp]
\centering
\includegraphics[resolution=130]{graphics/supervision-tree.png}
\caption{Schemat drzewa nadzorczego}
\end{figure} 

W ten sposób system nie posiada jednego punktu odpowiedzialnego za stabilność, a jest on podzielony na sekcje.  
Równie ważnym elementem OTP jest protokół komunikacji rozproszonej Erlanga. Podobnie jak lekkie procesy wirtualnej maszyny, komunikacja rozproszona bazuje na modelu aktorowym. Poza izolacją procesów na różnych węzłach komunikacji, istotną cechą protokołu jest jego transparentność. Wymiana wiadomości odbywa się w taki sam sposób jak pomiędzy procesami na jednej maszynie. Każdy z rozproszonych węzłów jest świadomy istnienia innych węzłów i może się z nimi komunikować tak jakby tworzyły jeden spójny system.\autocite{logan2010erlang}

### Model aktorowy
 
TODO: trochę rozszerzyć

- czym są aktorzy 
- podstawowe założenia
- rozwiązywane problemy

Aktorzy \autocite{hewitt1977laws, agha86actors} są modelem programowania współbieżnego. Są to obiekty o współbieżnym przetwarzaniu porozumiewające się wyłącznie asynchronicznymi wiadomościami. Każdy z aktorów przechowuje otrzymane wiadomości w skrzynce odbiorczej i przetwarza je sekwencyjnie, po jednej w danym czasie. 
Po przeprocesowaniu wiadomości aktor może zmienić swój stan, wysłać wiadomość lub stworzyć kolejnego aktora.  

\begin{figure}[htbp]
\centering
\includegraphics[resolution=130]{graphics/actor-messages.png}
\caption{Akcje w modelu aktorowym \autocite{karmani2009actor}}
\end{figure}

Taki model przetwarzania pozwala uniknąć zablokowania przez czekającą wiadomość, co pozwala na łatwiejsze unikanie zakleszczeń w systemie.
Obsługa każdej z wiadomości jest operacją atomową.  
Aktorzy są od siebie odizolowani, nie dzielą między sobą zasobów i stanu. Takie podejście zmniejsza ryzyko wystąpienia zjawiska wyścigu. Połączenie asynchronicznego wykonywania i izolacji pozwala w pełni wykorzystać moc wielordzeniowych procesorów. Z tego względu model aktorowy jest atrakcyjny przy zastosowaniu ze współczesnymi architekturami.  
Inną cechą aktorów jest przezroczystość położenia. Poszczególne jednostki rozpoznają się używając unikalnych adresów. Bez konieczności znajomości lokalizacji odbiorcy aktorzy mogą być rozdystrybuowani w system rozproszony. W związku z tym systemy oparte o model aktorowy skalują się na wiele różnych maszyn.


## Dyskusja

Java Enterprise Edition zaczynała z nie więcej niż 10 standardami. Przez wiele lat rozwoju i aktualizacji liczba ta zwiększyła się aż do 34 w wersji 7. Serwery aplikacyjne, które są podstawowym składnikiem budulcowym aplikacji napisanych wykorzystujących Javę EE, dążą do pełnej implementacji standardowej specyfikacji oraz wzbogacają ją o własne rozwiązania. Niewiele z tych technologii wprowadza korzystne dla architektury mikroserwisowej rozwiązania. Standard Java EE nigdy nie był projektowany z myślą o systemach rozproszonych poza wydzieleniem warstwy bazodanowej i klienckiej. W związku z powyższym, na starcie utrzymujemy w systemie dużą bazę kodu, który nie zostanie wykorzystany. Wykorzystanie serwerów aplikacyjnych zakłada wdrażanie na jednym z nich wielu usług jednocześnie. Biorąc po uwagę fakt, że taki serwer pracuje pod jednym procesem wirtualnej maszyny Javy, aplikacje działające pod jego nadzorem mogą zakłócać działanie sobie na wzajem, a w najgorszym przypadku jedna z nich może doprowadzić do awarii wszystkich poprzez przerwanie działania samego serwera.  

Tworzenie aplikacji monolitycznych jest możliwe przy wykorzystaniu Node.js, lecz zastosowanie jednowątkowego wzorca Rektor nie sprzyja takiemu podejściu. Z tego względu lepszym rozwiązaniem wydaje się wydzielenie poszczególnych funkcjonalności na osobne programy, dzięki czemu mogą wykorzystać zasoby systemów wieloprocesorowych bez wzajemnej ingerencji w działanie. Z tego powodu, pomimo braku standardowych rozwiązań, zastosowanie architektury mikroserwisowej jest popularnym wyborem w środowisku JavaScript i wokół tego modelu rozwijanych jest szereg narzędzi i bibliotek.

elixir - podobnie jak js wciąż niewytarte szlaki. model aktorowy, szczególnie w wydaniu distributred elixir, umożliwia komunikację pomiędzy serwisami w sposób transparentny dla programisty. model dojrzały ze względu na erlanga, lecz wciąż rozwijany, za równo z poziomu erlanga jak i elixira. Phoenix deployment ready - głównie pakuje w jedno dojrzałe technologie, wprowadzając ułątwienia dla programistów.