# Opis technologii

Języki programowania to nie tylko składania, ale cały ekosystem technologii tworzony wokół nich.

## Java

Java jako standard aplikacji biznesowych. Przedstawienie powszechności Javy w biznesie, współczesny Cobol.

## JavaScript

Opis popularności JavaScript, języka stworzonego na cele interfejsu użytkownika, po stronie serwerowej. Wykorzystanie JS dla backendu dzięki Node.js. Założenia i podstawy Node.js.

## Elixir

Elixir jest nowym językiem programowania opartym o dorobek języka Erlang, stworzonego przez firmę Ericsson. Jest dynamicznie typowany, utrzymany w funkcyjnym paradygmacie funkcyjnym, zaprojektowanym do tworzenie skalowalnych, łatwych w utrzymaniu aplikacji. \cite{thomas2014elixir}
Wykorzystanie Erlanga jako podstawy nie sprowadza się jedynie do założeń. Erlang to nie tylko funkcyjny język programowania, ale również zestaw wzorców projektowych, zwanych OTP (dawniej Open Telecom Platform \cite{logan2010erlang}), oraz wirtualnej maszyny Erlanga, BEAM. Ta ostatnia została stworzona od podstaw w celu wspierania złożonych, współbieżnych i rozproszonych systemów o wysokiej odporności na błędy. Kod Elixira, jest wykonywany w ramach lekkich procesów (aktorów), trzymających własny stan i komunikujących się między sobą poprzez przesyłanie wiadomości (ang. *message passing*). Wirtualna maszyna sama rozdziela procesy pomiędzy rdzenie procesora zapewniając równoległość przetwarzania oraz dbając o żywotność procesów. 
Elixir odziedziczył również całe zaplecze narzędzi stworzonych na potrzeby Erlanga oraz kod biblioteczny, który może być wykorzystywany bez strat wydajności. 
Nie jest to jedynie próba odświeżenia 30-o letniego języka jakim jest Erlang, a wzbogacenie go przydatne funkcjonalności, jak metaprogramowanie czy polimorfizm, oraz przyjazną składnię. Celem twórcy Elixira, José Valima, było stworzenie rozszerzalnego, przyjaznego programistom języka. \cite{valim2013design}