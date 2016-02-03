# Opis technologii

Współczesne języki programowania to nie tylko składania i kompilatory. To także ustalone modele i wzorce programistyczne, standardy oraz społeczności.  
Typowym przedstawicielem kategorii klasycznych technologii jest Java, ze względu na powszechność, długą historię oraz wyraźne podłoże biznesowe. Do drugiej, innowacyjnej, grupy wybrano dwa języki programowania: skupiający ogromną społeczność programistów JavaScript wraz z Node.js oraz promujący funkcyjną metodykę programowania Elixir.

## Java {#technologie---java}

Java jest platformą programistyczną, której kluczowymi elementami są: obiektowy język programowania Java oraz Java Virtual Machine (ang. wirtualna maszyna Javy). Została stworzona w 1995 przez firmę Sun Microsystems do budowania przenośnego oprogramowania. Obecnie ona jest własnością Oracle Corporation. Java należy do jednych z najpopularniejszych języków programowania na świecie\autocite{tiobe2015index}.
Dzieli się ona na kilka wydań różniących się funkcjonalnością i przeznaczeniem. Najbardziej powszechne z nich to *Java Standard Edition* przeznaczone do zastosowań ogólnych. Stanowi ona rdzeń języka wzbogacony o często wykorzystywane biblioteki jak dostęp do bazy danych czy łączność sieciową oraz narzędzia, w skład których wchodzą wirtualna maszyna i aplikacje deweloperskie.  
Kolejnym wydaniem jest *Java Micro Edition* cechująca się małymi wymaganiami sprzętowymi, przeznaczona do programowania systemów wbudowanych. Rozbudowaną bibliotekę edycji standardowej zastąpiono mechanizmami niezbędnymi do interakcji z warstwą sprzętową. 
Ostatnim z nich jest *Java Enterprise Edition*. Bazuje ono na Javie SE, rozszerzając ją o interfejsy przeznaczone dla rozbudowanych, skalowalnych systemów sieciowych do zastosowań biznesowych.\autocite{jendrock2014jee}

## JavaScript

JavaScript jest językiem programowania zapoczątkowanym w 1995 przez Netscape Communications Corporation do wykonywania skryptów na stronach internetowych. Język ten bardzo się rozwinął i wyrósł ponad pierwotne skryptowe zastosowania. Bywa nazywany językiem Internetu, gdyż jest implementowany przez większość przeglądarek internetowych stanowiąc warstwę logiczną stron www, obok HTML tworzącego treść i CSS specyfikującego warstwę prezentacji.\autocite{flanagan2006javascript}

### Node.js

Nie wszystkie implementacje JavaScriptu są częścią przeglądarek internetowych. JavaScript można również zastosować do tworzenia oprogramowania serwerowego przy użyciu środowiska Node.js. Dzięki temu programiści znający język z tworzenia kodu klienckiego mogą wykorzystać swoje umiejętności do programowania logiki serwerowej. Node.js bazuje na silniku JavaScriptowym przeglądarki Google Chrome nazywanym V8. Do implementacji silnika oraz Node.js wykorzystano języki C oraz C++. Wybór ten podyktowany był możliwością ograniczenia zapotrzebowania na pamięć operacyjną przy zachowaniu wysokiej wydajności. W przeciwieństwie do większości współczesnych środowisk programistycznych, Node do obsługi współbieżnego przetwarzania logiki biznesowej nie wykorzystuje wielowątkowości, a modelu opartego o asynchronicznie przetwarzane zdarzeń. Takie połączenie miało na celu stworzenie platformy, która umożliwiałaby w prosty sposób budowanie lekkich i wydajnych systemów informatycznych. Dzięki powszechności JavaSciptu w przeglądarkach internetowych oraz powstania możliwości zastosowania go po stronie serwerowej, wokół języka zgromadziła się ogromna społeczność. Repozytorium *npm* przechowuje ponad 230 tysięcy publicznie dostępnych bibliotek oraz odnotowuje prawie 140 milionów pobranych plików dziennie.\autocite{npm2015,tilkov2010node,lerner2011node}

## Elixir i Erlang

Elixir to język programowania stworzony na podstawie języka *Erlang*.  Korzenie te są na tyle wyraźne i znaczące, że nie sposób go przedstawić bez wcześniejszego zapoznania się z Erlangiem.

### Erlang

Erlang jest funkcyjnym językiem programowania stworzonym w latach osiemdziesiątych przez szwedzką firmę telekomunikacyjną Ericsson. Przeznaczeniem tej technologii było budowanie skalowalnych i niezawodnych systemów.  
Pomimo swoich początków w systemach telekomunikacyjnych nie jest wyspecjalizowany w tej domenie, a sprawdza się wszędzie tam gdzie zachodzi potrzeba współbieżności, rozproszonej komunikacji i odporności na błędy.\autocite{armstrong96erlang} W dobie internetu są to cechy bardzo pożądane. Aby spełnić postawione założenia stworzono wirtualną maszynę zwaną BEAM (Bogdan/Björn’s Erlang Abstract Machine)\autocite{hebert2013erlang}. Programy pisane w Erlangu są wysoce współbieżne ze względu na fakt, że poszczególne funkcjonalności są wykonywane w ramach lekkich procesów (aktorów)[zob \ref{model-aktorowy}]. Ich cyklem życia zarządza wirtualna maszyna, rozdzielając dostępne zasoby sprzętowe. Aby zapewnić niezawodność procesy są od siebie odseparowane i niezależne, awaria jednego z nich nie prowadzi do eskalacji problemu. Zbiór takich jednostek może tworzyć złożone, skalowalne systemy.\autocite{logan2010erlang}

### Elixir

*Elixir* jest młodym językiem programowania działającym na maszynie wirtualnej *Erlanga*. W przeciwieństwie do *Erlanga*, nie jest to produkt konkretnej firmy, a otwarty projekt, rozwijany przez społeczność entuzjastów.  
Celem José Valima, twórcy Elixira, było stworzenie rozszerzalnego oraz przyjaznego programistom języka programowania \autocite{valim2013design}. Pomimo tego, że Elixir jest bardzo zbliżony do Erlanga, jest przystępniejszy dla użytkownika. Uporządkowano standardową bibliotekę pozbywając się zbędnych, zduplikowanych elementów oraz wprowadzono powszechne konwencje ułatwiające tworzenie i utrzymanie kodu. Ponadto *Elixir* wprowadza mechanizmy pozwalające rozszerzać język przy użyciu metaprogramowania i polimorfizmu.  
Dzięki wykorzystaniu BEAM, Elixir może korzystać z narzędzi oraz bibliotek stworzonych na potrzeby Erlanga kodu bez uszczerbku na wydajności\autocite{thomas2014elixir, stlaurent2014elixir}.