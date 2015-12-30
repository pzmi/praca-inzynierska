# Opis technologii

TODO: wstęp do rozdziału
Języki programowania to nie tylko składania, ale cały ekosystem technologii tworzony wokół nich.

## Java

Java jest platformą programistyczną, której kluczowymi elementami są obiektowy język programowania Java oraz Java Virtual Machine (ang. wirtualna maszyna Javy). Została stworzona przez firmę Sun Microsystems w 1995, obecnie jest własnością Oracle Corporation, do do budowania przenośnego oprogramowania. Java jest jest jednym z najpopularniejszych języków programowania na świecie\autocite{tiobe2015index}.
Java dzieli się na kilka wydań różniących się funkcjonalnością i przeznaczeniem. Najbardziej powszechne z nich to Java Standard Edition przeznaczona do ogólnego zastosowania. Stanowi rdzeń języka wzbogacony o często wykorzystywane biblioteki jak dostęp do bazy danych czy łączność sieciową oraz narzędzia, w skład których wchodzą wirtualna maszyna i aplikacje deweloperskie.  
Kolejnym wydaniem jest Java Micro Edition cechująca się małymi wymaganiami sprzętowymi, przeznaczona do programowania systemów wbudowanych.  
Ostatnim z wydań jest Java Enterprise Edition. Bazuje ono na Javie SE, rozszerzając ją o interfejsy przeznaczone dla rozbudowanych, skalowalnych systemów sieciowych.\autocite{jendrock2014jee}

## JavaScript

JavaScript jest językiem programowania zapoczątkowanym w 1995 przez Netscape Communications Corporation do wykonywania skryptów na stronach internetowych. Do dnia dzisiejszego język ten bardzo się rozwinął i wyrósł ponad pierwotne skryptowe zastosowania. Bywa nazywany językiem Internetu, gdyż jest implementowany przez większość przeglądarek internetowych stanowiąc warstwę logiczną stron www, obok HTML tworzącego treść i CSS specyfikującego warstwę prezentacji.\autocite{flanagan2006javascript}

### Node.js

Nie wszystkie implementacje JavaScriptu są częścią przeglądarek internetowych. Do jego wykorzystania po stronie serwerowej zostało stworzone środowisko Node.js. Dzięki temu programiści znający już język z tworzenia kodu klienckiego mogą wykorzystać swoje umiejętności do programowania logiki serwerowej. Node.js na silniku JavaScriptowym przeglądarki Google Chrome nazywanym V8. Znaczna część implementacji jego oraz Node.js jest napisana w językach C oraz C++ w celu zmaksymalizowania wydajności jednocześnie ograniczając zapotrzebowanie na pamięć operacyjną. W przeciwieństwie do większości współczesnych środowisk programistycznych, Node do obsługi współbieżnego przetwarzania logiki biznesowej wykorzystuje wielowątkowości, a modelu opartym o asynchronicznie przetwarzane zdarzenia. Takie połączenie miało na celu stworzenie platformy, która umożliwiałaby w prosty sposób budowanie lekkich i wydajnych systemów informatycznych. Dzięki powszechności JavaScipt w przeglądarkach internetowych oraz możliwości zastosowanie go po stronie serwerowej dzięki Node.js wokół języka zgromadziła się ogromna społeczność. Repozytorium npm przechowuje ponad 200 000 bibliotek oraz odnotowuje prawie 140 milionów pobranych plików dziennie\autocite{npm2015}.\autocite{tilkov2010node,lerner2011node}

## Elixir i Erlang

Elixir to język programowania stworzonym na podstawie języka Erlang. Jego korzenie są na tyle wyraźne i znaczące, że nie sposób go przedstawić bez wcześniejszego przyjrzenia się Erlangowi.

### Erlang

Erlang jest funkcyjnym językiem programowania stworzonym w latach 80. przez szwedzką firmę telekomunikacyjną Ericsson. Jego przeznaczeniem było budowanie skalowalnych i niezawodnych systemów.  
Pomimo swoich początków w systemach telekomunikacyjnych nie jest wyspecjalizowany w tej domenie, a sprawdza się wszędzie tam gdzie potrzeba współbieżności, rozproszonej komunikacji i odporności na błędy.\autocite{armstrong96erlang} W dobie internetu są to cechy bardzo pożądane. Aby spełnić postawione założenia stworzono wirtualną maszynę zwaną BEAM (Bogdan/Björn’s Erlang Abstract Machine)\autocite{hebert2013erlang}. Programy pisane w Erlangu są wysoce współbieżne ze względu na fakt, że poszczególne funkcjonalności są wykonywane w ramach lekkich procesów (aktorów)[patrz \ref{model-aktorowy}]. Ich cyklem życia zarządza wirtualna maszyna, przydzielając dostępne zasoby sprzętowe. Aby zapewnić niezawodność procesy są od siebie odseparowane i niezależne, awaria jednego z nich nie prowadzi do eskalacji problemu. Zbiór takich jednostek może tworzyć złożone, skalowalne systemy.\autocite{logan2010erlang}

### Elixir

Elixir jest młodym językiem programowania działającym na maszynie wirtualnej Erlanga. W przeciwieństwie do Erlanga, nie jest to produkt firmy a otwarty projekt, rozwijany przez społeczność entuzjastów.  
Celem jego twórcy, José Valima, było stworzenie języka rozszerzalnego, przyjaznego programistom \autocite{valim2013design}. Pomimo tego, że Elixir jest bardzo zbliżony do Erlanga, jest przystępniejszy dla użytkownika. Pozbyto się zbędnych elementów i duplikacji w celu ułatwienia tworzenia i utrzymania kodu, porządkuje standardową bibliotekę oraz definiuje powszechne konwencje. Ponadto Elixir wprowadza mechanizmy pozwalające rozszerzać język przy użyciu metaprogramowania i polimorfizmu.  
Dzięki wykorzystaniu BEAM, Elixir może korzystać z narzędzi stworzonych na potrzeby Erlanga oraz biblioteki kodu bez uszczerbku na wydajności\autocite{thomas2014elixir, stlaurent2014elixir}.