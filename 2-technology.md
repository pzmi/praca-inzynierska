# Opis technologii

Języki programowania to nie tylko składania, ale cały ekosystem technologii tworzony wokół nich.

## Java

Java jako standard aplikacji biznesowych. Przedstawienie powszechności Javy w biznesie, współczesny Cobol.

## JavaScript

Opis popularności JavaScript, języka stworzonego na cele interfejsu użytkownika, po stronie serwerowej. Wykorzystanie JS dla backendu dzięki Node.js. Założenia i podstawy Node.js.

## Elixir i Erlang

Elixir jest młodym językiem programowania stworzonym na podstawie języka Erlang. Jego korzenie są na tyle wyraźne i znaczące, że nie sposób go przedstawić bez wcześniejszego przyjrzenia się Erlangowi.

### Erlang

Erlang jest funkcyjnym językiem programowania stworzonym w latach 80. przez szwedzką firmę telekomunikacyjną Ericsson. Jego przeznaczeniem było budowanie skalowalnych i niezawodnych systemów.  
Pomimo swoich początków w systemach telekomunikacyjnych nie jest wyspecjalizowany w tej domenie, a sprawdza się wszędzie tam gdzie potrzeba współbieżności, rozproszonej komunikacji i odporności na błędy. W dobie internetu są to cechy bardzo pożądane. Aby spełnić postawione założenia stworzono wirtualną maszynę zwaną BEAM (Bogdan/Björn’s Erlang Abstract Machine).\autocite{hebert2013erlang}. Programy pisane w Erlangu są wysoce współbieżne ze względu na fakt, że poszczególne funkcjonalności są wykonywane w ramach lekkich procesów (aktorów). Ich cyklem życia zarządza wirtualna maszyna, przydzielając dostępne zasoby sprzętowe. Aby zapewnić niezawodność procesy są od siebie odseparowane i niezależne, awaria jednego z nich nie prowadzi do eskalacji problemu. Ze względu na taką separacje, komunikacja pomiędzy procesami odbywa się poprzez przesyłane między sobą wiadomości (ang. *message passing*). Zbiór takich jednostek może tworzyć złożone, skalowalne systemy.  
Erlang to nie tylko język programowania, ale również zestaw narzędzi i wzorców programistycznych zwanych *Open Telecom Platform* (OTP). Mimo swojej nazwy, jest to zbiór bibliotek ogólnego zastosowania, wprowadzający standardowe rozwiązania dla powszechnych problemów. Dodatkowo zawiera narzędzia do rozproszonej komunikacji, wykrywania błędów czy przeładowywania kodu działającego systemu.\autocite{logan2010erlang}

### Elixir

Elixir jest młodym językiem programowania działającym na maszynie wirtualnej Erlanga. W przeciwieństwie do Erlanga, nie jest to produkt firmy a otwarty projekt, rozwijany przez społeczność entuzjastów.  
Celem jego twórcy, José Valima, było stworzenie języka rozszerzalnego, przyjaznego programistom.\autocite{valim2013design} Pomimo tego, że Elixir jest bardzo zbliżony do Erlanga, jest przystępniejszy dla użytkownika. Pozbyto się zbędnych elementów i duplikacji w celu ułatwienia tworzenia i utrzymania kodu, porządkuje standardową bibliotekę oraz definiuje powszechne konwencje. Ponadto Elixir wprowadza mechanizmy pozwalające rozszerzać język przy użyciu metaprogramowania i polimorfizmu.  
Dzięki wykorzystaniu BEAM, Elixir może korzystać z narzędzi stworzonych na potrzeby Erlanga oraz biblioteki kodu bez uszczerbku na wydajności.\autocite{thomas2014elixir, stlaurent2014elixir}