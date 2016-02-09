
# Architektura systemu informatycznego

Złożoność systemów informatycznych stale rośnie. Wraz ze złożonością zwiększa się ich zapotrzebowanie na moc obliczeniową. Biorąc pod uwagę spowalniające prawo Moore'a, sprostanie potrzebom zwiększenia mocy jest znacznie utrudnione. Rozwiązaniem tego problemu jest stosowanie architektur równoległych, procesorów wielordzeniowych i układów wieloprocesorowych. Wzrost zainteresowania komputerami wielordzeniowymi niesie dodatkową pracę programistyczną, wymagającą tworzenia oprogramowania współbieżnego. Taki kod jest znacznie trudniejszy do analizy, ponieważ poza kontekstem aktualnie wykonywanej sekwencji kodu należy wziąć pod uwagę synchronizację z innymi wątkami. Poziom komplikacji zbioru częściowo uporządkowanych operacji wykonywanych współbieżnie jest znaczenie wyższy niż programu sekwencyjnego. Dodatkową przeszkodą jest problem pamięci współdzielonej. Dominującym modelem programowania współbieżnego jest wykorzystanie pamięci dzielonej pomiędzy wiele, działających paralelnie wątków. Jeżeli co najmniej dwa z nich jednocześnie próbują uzyskać dostęp jednego obszaru pamięci pojawia się zjawisko *wyścigu*, które może prowadzić do niespójności i uszkodzenia danych. Istnieją metody zapobiegania takim sytuacjom, najprostsza z nich to stosowanie blokad przy dostępie do współdzielonego obszaru pamięci. Pomimo prostoty koncepcji, stosowanie blokad w skomplikowanych systemach może prowadzić do dużej liczby błędów, ponieważ nie jest to podejście naturalne dla deweloperów. Blokady wprowadzają nowe klasy problemów jak *deadlocki* i *livelocki*. Prowadzi to do powstawania oprogramowania nieodpornego na błędy, które trudno skalować. Nieustannie wytwarzane są narzędzia oraz nowe modele współbieżności, które mają ułatwić pracę programistom, pomagające rozwiązać wymienione problemy z blokadami \autocite{stutter2005software, lee2006problem}.  
Problem rosnącego zapotrzebowania na moc obliczeniową można rozwiązać również poprzez zastosowanie systemów rozproszonych. Za tym podejściem przemawia wiele czynników, między innymi: geograficzne rozdystrybuowanie źródeł i ujść informacji, krótki czasu rekcji, niższa cena komputerów, zwiększona niezawodność.  
Z drugiej strony tworzenie systemów rozproszonych niesie ze sobą te same ograniczenia i problemy dostępu do współdzielonych zasobów jak wykorzystanie pamięci współdzielonej. Dodatkową komplikacją w tym przypadku jest tworzenie algorytmów korzystających z wielu maszyn jednocześnie. Klasycznym podejściem jest wykorzystanie czasu jako podstawy opracowywania algorytmów synchronizacji. Wprowadzenie dodatkowego czynnika jakim jest czas wynika z opóźnień powstałych w na etapie komunikacji pomiędzy procesami działającymi na odrębnych maszynach, jednakże dodatkowa zmienna znacznie zwiększa złożoność i nakład pracy \autocite{lamport1978time}.

## Współczesne trendy 

### Architektura mikroserwisowa

Wiele uwagi poświęca się w ostatnim czasie tematyce zastosowania architektury mikroserwisowej w projektach systemów informatycznych.  
Mikroserwisowy styl architektoniczny reprezentuje podejście do wytwarzania oprogramowania jako zboru małych usług, każda działająca jako osobny proces, porozumiewające się za pomocą lekkich protokołów. Usługi te są zbudowane wokół funkcjonalności biznesowych i każda z nich jest niezależnie wdrażana przez zautomatyzowane systemy wdrożeniowe. Założeniem jest, aby usługi w jak najmniejszym stopniu wykorzystywały narzędzia scentralizowanego zarządzania. Implementacja każdej z usług, jak również stosowane narzędzia są na tyle niezależne od siebie, że mogą wykorzystywać różne języki programowania i technologie przy założeniu jednolitego interfejsu.

\begin{figure}[!ht]
\centering
\includegraphics[resolution=500]{graphics/microservice-example.png}
\caption{Przykład projektu systemu w architekturze mikroserwisowej\autocite{bastani2015springcloud}}
\end{figure}

Nie ma formalnej definicji architektury mikroserwisowej, lecz są pewne cechy charakterystyczne, które często pojawiają się w tego typu systemach.
Usługi często są wykorzystywane jako reużywalne komponenty. Każdy z nich może być uruchomiony niezależnie i wprowadzanie w nich zmian nie prowadzi do ponownego wdrożenia całości aplikacji, a jedynie jednej z jej części. 
Nie tylko technologia programowania jest niezależna od architektury, to samo tyczy się trwałych składowisk danych. Usługi nie powinny dzielić jednej bazy danych, tak aby każda z nich była niezależna. Nic nie stoi na przeszkodzie, aby wykorzystać różne technologie przechowywania danych, przykładowo bazę danych relacyjną oraz NoSQL w jednym systemie informatycznym.  
Taki podział systemu wymaga mechanizmów zewnętrznej komunikacji pomiędzy usługami, których koszt jest dużo wyższy od wywołań wewnątrz aplikacji. W związku z tym funkcjonalności i odpowiedzialności muszą być odpowiednio zaprojektowane i wydzielone. Celem tego jest minimalizacja koniecznej komunikacji pomiędzy komponentami, co jednakże wiąże się z dodatkowymi nakładami na projektowanie.  
Do komunikacji w systemach rozproszonych wykorzystuje się różne technologie  
i podejścia, których odpowiedni dobór ma istotne znaczenie dla działania całości. Na przestrzeni lat stosowano wiele podejść, przykładowo Korporacyjną Szynę Usług (ang. *Enterprise Service Bus*), która skupia szereg skomplikowanych mechanizmów zarządzania usługami, trasowania wiadomości i transformacji danych. Społeczność wspierająca mikroserwisy proponuje wykorzystywanie prostych, lekkich rozwiązań komunikacyjnych. W tym celu często jest stosowany protokół HTTP przy zastosowaniu interfejsów REST \autocite{fowler2014microservice, fowler2015microservices, newman2015building}.

## Java {#architektura---java}

Architektura złożonych systemów pisanych w Javie jest silnie związana z *Javą Enterprise Edition*, gdyż definiuje ona szereg standardów dla tworzenia logiki aplikacyjnej. Proces, w którym ustalane są owe standardy, jest przeprowadzany w ramach *Java Community Process*. Członkami komitetu, jak również osobami biorącymi udział przy tworzeniu propozycji, jest społeczność użytkowników Javy i specjaliści w tej dziedzinie. Wielu z nich to przedstawiciele przedsiębiorstw aktywnie wykorzystujących te technologie, np. Credit Suisse, Ericsson, Fujitsu, IBM czy Intel\autocite{jcp2015}. Poprzez wkład ich oraz wielu innych firm, Java Enterprise Edition jest powszechnie wykorzystywana między innymi w branży finansowej czy IT do tworzenia oprogramowania biznesowego. 

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

Model ten jest powszechnie stosowany nie tylko dla aplikacji w Javie, ale również przy użyciu wielu innych technologii \autocite{eisele2015modern, jendrock2014jee}.

## JavaScript {#architektura---javascript}

Biorąc pod uwagę fakt, że JavaScript został stworzony do zastosowań w aplikacjach klienckich, środowisko to nie posiada ustandaryzowanych wzorców projektowania i tworzenia systemów informatycznych. Ze względu na dużą  
i różnorodną społeczność wielu programistów o odmiennym podłożu zawodowym, nieustannie powstaje szereg bibliotek oraz wiele modeli aplikacyjnych, lecz jak dotąd nie wyłonił się z nich żaden dominujący paradygmat. Jedynym wspólnym ich elementem jest Node.js, lecz biblioteka ta nie dyktuje wzorców architektonicznych, poza posługiwaniem się zdarzeniami i odwołaniami obsługi tychże.    
Programowanie w JavaScript w dużej mierze opiera się na obsłudze zdarzeń. Łatwo to zauważyć na przykładzie aplikacji przeglądarkowych, gdzie zdarzenia są wywoływane przez interakcje użytkownika z interfejsem, na przykład kliknięcia myszy czy przeciąganie obiektów. Z perspektywy projektu języka, w JavaScript wprowadzono ułatwienia dla programowania sterowanego zdarzeniami (ang. *event-driven programming*). Jednym z bardziej istotnych jest wprowadzenie funkcji wyższego rzędu. Dzięki nim możliwe jest przekazywanie jako parametrów funkcji innych funkcji jako odwołania do wykonanej akcji.

~~~~{.JavaScript .numberLines caption="Obsługa zdarzeń kliknięcia"}
function handleClick() {
    alert("Button clicked!");
};

var button = document.getElementById("button");
button.addEventListener("click", handleClick);
~~~~

W linijce 6 powyższego listingu do obiektu button została dodana obsługa zdarzenia. Jako pierwszy parametr metody *addEventListener* przekazano typ akcji - kliknięcie (*'click'*) oraz drugi parametr będący nazwą funkcji, która zostanie wykonana przy wykonaniu zdefiniowanej akcji.

### libuv

libuv jest to natywna biblioteka stanowiącą warstwę abstrakcji nad różnymi urządzeniami wejścia/wyjścia do wykonywania na nich asynchronicznych operacji. Została zaprojektowana z myślą o Node.js, lecz znalazła zastosowanie w innych projektach.  
W skład jej możliwości wchodzą:

 - asynchroniczna obsługa połączeń sieciowych poprzez TCP oraz UDP,
 - asynchroniczna obsługa plików oraz operacji na systemie plików,
 - zdarzenia systemu plików,
 - komunikacja między procesowa,
 - procesy pomne,
 - pula wątków,
 - obsługa przerwań,
 - zegar wysokiej rozdzielczości,
 - obsługa wątków i ich synchronizacja.

libuv udostępnia użytkownikom 2 interfejsy do pracy z wejściem/wyjściem: uchwyt (ang. *handle*) oraz zapytanie (ang. *request*).  
Uchwyty stanowią obiekty o długim czasie życia, zdolne do przeprowadzania pewnych operacji w czasie aktywacji, przykładowo uchwyt może implementować przyjmowanie połączeń na serwerze TCP i być aktywowany za każdym razem gdy pojawia się nowe połączenie.  
Zapytanie reprezentuje krótkotrwałe operacje, które mogą być wywoływane samodzielnie lub w cyklu obsługi uchwytu. Powyższe abstrakcje służą użytkownikom do interakcji z pętlą zdarzeń (ang. *event loop*).  
Pętla wejścia/wyjścia lub też pętla zdarzeń jest kluczową częścią libuv. Odpowiada ona za przetwarzanie wszystkich operacji związanych z wejściem/wyjściem, używając niecodziennego, jednowątkowego i asynchronicznego modelu obsługi tychże operacji. Wszystkie działania sieciowe wykonywane są w jednym wątku posługując się nieblokującymi gniazdami (ang. *socket*), które są cyklicznie odpytywane.  
W przeciwieństwie do sieciowego wejścia/wyjścia, obsługa plików jest bazowana na blokującym (synchronicznym) dostępie wykorzystującym pulę wątków. Każdy wątek z puli może niezależnie przetwarzać operacje na pliku.  
Takie podejście do równoległości jest przykładem wzorca *Reaktor*.

### Wzorzec Reaktor

Wzorzec *Reaktor* jest zaprojektowany do obsługi zapytań przychodzących równolegle do systemu od jednego lub więcej klientów. Każda funkcjonalność systemu jest reprezentowana przez osobne jednostki przetwarzania odpowiedzialne za obsługę jedynie zapytań przeznaczonych dla nich. Za podział zapytań pomiędzy jednostki przetwarzania odpowiedzialny jest synchroniczny demultiplekser.  
Kluczowymi elementami wzorca Reaktor są: uchwyty, demultiplekser zdarzeń (ang. *event demultiplexer*), dyspozytor wejściowy (ang. *initiation dispatcher*) oraz jednostki obsługi zdarzeń (ang. *event handler*).  
Uchwyty są zasobami zarządzanymi przez system operacyjny. Wśród nich znajdują się między innymi połączenia sieciowe czy otwarte pliki.  
Synchroniczny demultiplekser zdarzeń blokuje nadchodzące zdarzenia w oczekiwaniu na uchwyty i zwalnia blokadę kiedy operacja może zostać przeprowadzona na uchwycie bez potrzeby blokowania.  
Dyspozytor wejściowy definiuje interfejs do rejestracji, derejestracji i dyspozycji jednostek obsługi zdarzeń. Jest on informowany o nowych zdarzeniach w systemie, w wyniku czego wybiera odpowiednią jednostkę obsługi zdarzenia do otrzymanej akcji.  
Jednostka obsługi zdarzeń implementuje logikę przetwarzania przychodzących zdarzeń. System rejestruje takie jednostki w dyspozytorze wejściowym dla konkretnych typów zdarzeń. Kiedy jedno z nich zostanie odebrane, dyspozytor rozwiązuje odpowiednią jednostkę obsługi zdarzeń i wywołuje jej kod obsługi.

\begin{figure}[htbp]
\centering
\input{graphics/handle-event.pdf_tex}
\caption{Sekwencja działania Reaktora (źródło: praca własna)}
\end{figure}

Po zarejestrowaniu wszystkich jednostek obsługi zdarzeń startowana jest pętla obsługi zdarzeń (ang. *event loop*) dyspozytora. Uchwyty zostają powiązane z zarejestrowanymi z jednostkami obsługi, a demultiplekser czeka na zdarzenia przychodzące na uchwytach. Po nadejściu jednego z nich demultiplekser zawiadamia dyspozytora, że uchwyt jest gotowy do rozpoczęcia przetwarzania danych. Ten  
z kolei, używając typu źródła zdarzenia, wybiera jednostkę obsługi i wywołuje jej kod.  
Takie podejście pociąga za sobą szereg zalet jak i wad. Przede wszystkim zapewnia łatwą kontrolę nad współbieżnością. Reaktor kolejkuje zdarzenia na poziomie demultipleksowania i delegacji pracy do jednostek obsługi. Jest to zwykle wystarczające, aby wyeliminować potrzebę stosowania bardziej skomplikowanych metod synchronizacji i blokad w aplikacji. Dodatkowo, wzorzec ten ułatwia rozdzielenie odpowiedzialności pomiędzy komponenty systemu. Demultipleksowanie oraz delegacja jest niezależna od aplikacji i może być reużywana w różnych projektach. Część funkcjonalna systemu jest rozdzielona pomiędzy jednostki obsługi zdarzeń i każda z nich jest odpowiedzialna za obsługę konkretnych typów zapytań.  
Jednakże ceną przetwarzania jednowątkowego jest brak możliwości wywłaszczenia wątku, jednostki obsługi zdarzeń wykonują pracę nieprzerwanie. Z tego wynika, że żadne z nich nie powinno wykonywać blokujących operacji, ponieważ w takim przypadku jeden zablokowałby cały proces, ograniczając responsywność systemu. Co więcej, aplikacje napisane z wykorzystaniem wzorca Rektor mogą być trudniejsze do analizy i rozwiązywania błędów, ze względu na odwrócony proces przepływu sterowania. Implementacja tego wzorca jest ograniczona do możliwości systemu operacyjnego, który musi wspierać nieblokujące operacje. Ten problem można obejść wykorzystując wiele wątków, w których przetwarzanie odbywa się w sposób blokujący, jednak wyzbywając się korzyści wynikających z braku przełączania kontekstu.\autocite{schmidt1995reactor}

## Elixir {#architektura---elixir}

Erlang, a zatem i Elixir, to nie tylko języki programowania, ale również zestaw narzędzi i wzorców programistycznych zwanych *Open Telecom Platform* (OTP). 

### Open Telecom Platform

Mimo swojej nazwy, OTP jest zbiorem bibliotek ogólnego zastosowania, wprowadzający standardowe rozwiązania dla powszechnych problemów. Dodatkowo zawiera narzędzia do rozproszonej komunikacji, wykrywania błędów czy przeładowywania kodu działającego systemu. OTP wprowadza struktury generyczne dla różnych projektów informatycznych, które mają ułatwić pracę programistom, przykładowo ustandaryzowanej struktury plików projektowych, standardową bibliotekę powszechnie stosowanych funkcjonalności oraz zbiór tzw. *behaviour* (ang. *zachowanie*) będących wzorcami projektowymi dla różnorodnych systemów. Dzięki temu nowy pracownik zespołu może rozpoznać znane wzorce, co ułatwia zapoznanie się  
z istniejącą bazą kodu.  
Podejście do współbieżności w Erlangu/OTP znacznie różni się od powszechnie stosowanego modelu dzielonej pamięci z blokadami. W tym przypadku wykorzystywane są lekkie procesy, projektowane na *model aktorowy*, zarządzane przez wirtualną maszynę. Procesy te są od siebie całkowicie odizolowane, nie jest wykorzystana dzielona pamięć. Ze względu na taką separacje, komunikacja pomiędzy procesami odbywa się poprzez przekazywanie wiadomości między sobą (ang. *message passing*). Dzielone informacje są kopiowane i przesyłane do innego procesu. Dzięki temu nie jest możliwa wielodostępowa modyfikacja danych, co zapobiega powstawaniu anomalii. Jednakże takie podejście nie jest bez wad, gdyż powielanie dużych bloków pamięci może być kosztowne. 
W celu zapewnienia wysokiej niezawodności i odporności na błędy wprowadzone zostało jedno z ważniejszych *zachowań* OTP, *Supervisor* (ang. *nadzorca*). Jest on odpowiedzialny za tworzenie i monitorowanie stanu procesów wykonawczych. W sytuacji gdy proces wykonawczy, w wyniku błędu, przerwie pracę, wtedy nadzorca jest w stanie przywrócić poprawne funkcjonowanie systemu odtwarzając wykonawcę w normalnym stanie. Nadzorcy, będąc jedynie typem zachowania, mogą być traktowani jako zwykłe procesy wykonawcze, a zatem ich stan może być monitorowany przez innego nadzorcę tworząc w drzewa nadzorcze.
W ten sposób system nie posiada jednego punktu odpowiedzialnego za stabilność, a jest on podzielony na sekcje.  
Równie ważnym elementem OTP jest protokół komunikacji rozproszonej Erlanga. Podobnie jak lekkie procesy wirtualnej maszyny, komunikacja rozproszona bazuje na modelu aktorowym. Poza izolacją procesów na różnych węzłach komunikacji, istotną cechą protokołu jest jego transparentność. Wymiana wiadomości odbywa się w taki sam sposób jak pomiędzy procesami na jednej maszynie. Każdy z rozproszonych węzłów jest świadomy istnienia innych węzłów i może się z nimi komunikować tak jakby tworzyły jeden spójny system.\autocite{logan2010erlang}
\begin{figure}[htbp]
\centering
\includegraphics[resolution=130]{graphics/supervision-tree.png}
\caption{Schemat drzewa nadzorczego (źródło: praca własna)}
\end{figure} 


### Model aktorowy
 
Model aktorowy jest modelem programowania, w którym przetwarzanie jest wykonywane z natury współbieżnie. Podstawową jednostką wykonawczą tego modelu jest *aktor*.

Aktor jest jednostką wykonawczą, która odwzorowuje każdą przychodzącą wiadomość na krotkę składającą się z:

 - skończonego zbioru komunikatów przesłanych do innego aktora;
 - nowego zachowania, które wpłynie na odpowiedź następnego przetwarzanego komunikatu;
 - skończonego zbioru nowo utworzonych aktorów.

\begin{figure}[htbp]
\centering
\includegraphics[resolution=130]{graphics/actor-messages.png}
\caption{Akcje w modelu aktorowym \autocite{karmani2009actor}}
\end{figure}

Aktorzy, w odróżnieniu od modelu współdzielonych zmiennych, nie dzielą między sobą wspólnych obszarów pamięci. Informacje w obliczeniach aktorów mogą być przekazywane, tylko i wyłącznie, poprzez wiadomości. Model ze współdzieloną pamięcią nie dostarcza żadnych mechanizmów abstrakcji i ukrywania informacji. Aby stwierdzić czy inny obiekt otrzymał dostęp lub zmodyfikował wykorzystywane zmienne wymagane jest zdefiniowanie odpowiedniego protokołu. Co więcej, nie można stwierdzić czy na danych nie zostały wykonane niewłaściwe lub wręcz niepożądane operacje. Jednym ze sposobów radzenia sobie z sytuacjami tego typu jest wykorzystywanie blokad i synchronizacji. Model aktorowy zakłada, że komunikacja pomiędzy aktorami nie jest synchroniczna, a akcje stanowią częściowy porządek. Nadchodzące wiadomości trafiają do skrzynki odbiorczej, gdzie czekają na przetworzenie. Wszystko to ma służyć zapobieganiu blokowania i przetrzymywania zasobów, co może doprowadzić do zakleszczeń (ang. *deadlock*). Podstawową informacją zawartą w wiadomości jest istnienie innego *aktora*. Jest to spowodowane tym, że *aktor* A może skomunikować się z *aktorem* B jedynie znając jego *nazwę*. Tę wiedzę może posiąść jeśli otrzymał ją w chwili powstania lub poznał  
w wyniku przetwarzania nadchodzących wiadomości. Co więcej, komunikacja jest transparentna. Pomimo "świadomości" istnienia innego aktora, nie jest znane jego położenie. Umożliwia to utworzenie systemu aktorów fizycznie rozproszonych pomiędzy wiele maszyn połączonych w sieć oraz dynamiczną rekonfigurację topologii \autocite{karmani2009actor, hewitt1977laws, agha86actors}.

## Dyskusja

Poprzez wiele lat rozwoju i kolejne aktualizacje liczba standardów zawartych w pakiecie Java Enterprise Edition zwiększyła się z 10 do 34. Serwery aplikacyjne, które są podstawowym składnikiem budulcowym aplikacji napisanych wykorzystujących Javę EE, dążą do pełnej implementacji standardowej specyfikacji oraz wzbogacają ją o własne rozwiązania. Niewiele z tych technologii wprowadza korzystne dla architektury mikroserwisowej rozwiązania. Standard Java EE nigdy nie był projektowany z myślą o systemach rozproszonych, poza wydzieleniem warstwy bazodanowej i klienckiej. W związku z powyższym, na starcie utrzymujemy w systemie dużą bazę kodu, który nie zostanie wykorzystany. Stosowanie serwerów aplikacyjnych zakłada wdrażanie na jednym z nich wielu usług jednocześnie. Biorąc po uwagę fakt, że taki serwer pracuje w jednym procesie wirtualnej maszyny Javy, aplikacje działające pod jego nadzorem mogą zakłócać działanie sobie nawzajem, a w najgorszym przypadku jedna z nich może doprowadzić do awarii wszystkich poprzez przerwanie działania samego serwera.

Tworzenie aplikacji monolitycznych jest możliwe przy wykorzystaniu Node.js, lecz zastosowanie jednowątkowego wzorca Rektor nie sprzyja takiemu podejściu. Z tego względu lepszym rozwiązaniem wydaje się wydzielenie poszczególnych funkcjonalności na osobne programy, dzięki czemu mogą wykorzystać zasoby systemów wieloprocesorowych bez wzajemnej ingerencji w działanie. Z tego powodu, pomimo braku standardowych rozwiązań, zastosowanie architektury mikroserwisowej jest popularnym wyborem w środowisku JavaScript i wokół tego modelu rozwijanych jest szereg narzędzi i bibliotek.

Podobnie ja w przypadku języka JavaScript, w Elixirze nie istnieją standardowe wzorce architektoniczne systemów informatycznych. OTP sugeruje jedynie kształt podstawowych elementów budulcowych aplikacji, nie narzucając projektu. Monolityczne oprogramowanie stworzone w Elixirze można podzielić na mniejsze usługi wydzielając niezależne grupy procesów (aktorów) jako działające niezależne programy. Do komunikacji między procesami w architekturze mikroserwisowej popularnym wyborem jest HTTP. Jednakże, przy użyciu Elixira, usługi mogą porozumiewać się przy pomocy protokołu rozproszonej komunikacji wirtualnej maszyny Erlanga. Jest to także ułatwienie dla programistów, gdyż wykorzystanie jego jest transparentne z punktu widzenia użytkownika [zob. \ref{skalowalnoux15bux107}]. OTP ze względu na pochodzenie ze środowiska Erlanga jest technologią dojrzałą, stabilną oraz aktywnie rozwijaną przez społeczność Elixira \autocite{valim2015microservices}.