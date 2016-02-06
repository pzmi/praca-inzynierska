# Skalowalność

*Skalowalność*, w kontekście systemów informatycznych, jest zdolnością systemu do efektywnego wykorzystania zwiększonej puli zasobów. Innymi słowy zwiększając możliwości obliczeniowe sprzętu, w ramach którego oprogramowanie jest uruchomione, wydajność powinna się zwiększyć.
Można wyróżnić dwa wymiary skalowalności\autocite{elrewini2005advanced}:

 - pionowa
 - pozioma


## Skalowalność pionowa

Mówimy o *skalowalności pionowej* jeśli zwiększamy zasoby jednego węzła systemu komputerowego, rdzenie procesora lub pamięć do jednego komputera.\autocite{elrewini2005advanced}

Wirtualna maszyna, z której korzysta Java, jest w stanie użyć wszystkich dostępnych rdzeni procesora. Ich wykorzystanie zależy od zastosowania mechanizmów współbieżności dostępnych w języku, np. wątków. Wielowątkowość JVM jest zaimplementowana z użyciem natywnych wątków systemów operacyjnych. Dodatkowo Java udostępnia pewne abstrakcje, np. wykonawców (ang. *executor*), mające za zadanie ułatwić programistom prace w wielowątkowym środowisku. Wirtualna maszyna Javy oferuje zbiór parametrów konfiguracyjnych pozwalających na strojenie jej pracy. Dzięki nim można dostosować, między innymi, wykorzystanie pamięci operacyjnej, aby lepiej wykorzystać dostępne zasoby.

Założeniem JavaScriptu, a raczej Node.js, jest użytkowanie jednowątkowego modelu Reaktor. W związku z tym każdy proces aplikacji może wykorzystać tylko jeden wątek systemu operacyjnego. Standardowa biblioteka Node'a zawiera moduł *cluster*. Umożliwia on rozwidlenie aplikacji przy użyciu komendy *fork* na zasadzie *master/slave*. Proces *master* jest punktem wejściowym programu i jest odpowiedzialny za uruchomienie procesów potomnych. Tworzone procesy, zwane *worker*, odpowiadają za logikę aplikacji. Mogą one współdzielić nasłuchiwany port, wtedy zapytania zostaną automatycznie zbalansowane pomiędzy wszystkie procesy potomne. Zamysłem modułu było proste, niskopoziomowe wsparcie dla wielu procesów, programista jest odpowiedzialny za zarządzanie nimi i obsługę błędów. 

Wirtualna maszyna Erlanga, BEAM, zarządza lekkimi procesami automatycznie, zajmuje się rozdzielaniem dostępnych zasobów pomiędzy jednostki obliczeniowe i harmonogramuje zadania. Jedyną abstrakcją ponad wątkami są lekkie procesy wirtualnej maszyny, modelowane na aktorów. W wypadku, gdy potrzebna jest większa kontrola nad sprzętem, niezbędne jest wykorzystanie natywnych wywołań. Podobnie jak wirtualna maszyna Javy, BEAM udostępnia szereg parametrów konfiguracyjnych, jednak w przeciwieństwie do JVM umożliwia kontrolę nad wykorzystaniem procesorów.

## Skalowalność pozioma

Mówimy o *skalowalności poziomej* jeśli dodajemy kolejne węzły do rozproszonego systemu komputerowego.\autocite{elrewini2005advanced}

Aplikacje, które nie były projektowane z myślą o przetwarzaniu rozproszonym, mogą być skalowane z użyciem uniwersalnych technik. Dzięki nim monolityczne systemy, do pewnego stopnia, mogą czerpać korzyść z używania wielu maszyn jednocześnie. Podstawową techniką jest uruchamianie wielu instancji aplikacji oraz zrównoważenie obciążenia (ang. *loadbalancing*) pomiędzy nimi. Nie jest to jednak technika wykorzystywana jedynie w przypadku systemów monolitycznych, można ją wykorzystać również dla architektur mikroserwisowych. Powszechną praktyką jest powielanie wybranych usług w czasie dużego ich obciążenia, często przeprowadzane automatycznie.

Standard Java EE definiuje obiekty EJB (ang. *Enterprise Java Beans*). Jedną z nich funkcjonalności jest udostępnienie metod do zdalnego wywoływania. Mogą one być wykorzystane do komunikacji pomiędzy różnymi maszynami w rozproszonej architekturze. Jednakże używanie ich wymaga wcześniejszej konfiguracji i odpowiedniego oprogramowania usług. Na przestrzeni lat technologia ta znacząco się rozwinęła, lecz również straciła na popularności kosztem interfejsów HTTP.

Poza modułem *cluseter*, Node.js nie oferuje narzędzi do komunikacji międzyprocesowej. Wspomniana biblioteka nie posiada również funkcji umożliwiających komunikację zdalną, tworzenie systemów rozproszonych. W tym przypadku pozostaje użycie zewnętrznych narzędzi i technik ogólnego zastosowania, jak *loadbalancing*.

Model aktorowy zakłada transparentność komunikacji pomiędzy aktorami, zarówno lokalnie jak i w systemie rozproszonym. Jedynym wymogiem jest znajomość *nazwy* odbiorcy, czy przekazana w chwili utworzenia czy dostarczona przy użyciu wiadomości, Procesy w BEAM są w stanie komunikować się ze w sieci wielu maszyn taki sam sposób jakby to robiły w obrębie jednej wirtualnej maszyny, jednakże wciąż jest wymagana znajomość identyfikator procesu. Biblioteka Erlanga udostępnia funkcje umożliwiające rejestrację identyfikatora w globalnym rejestrze, który można później odzyskać posługując się wybraną nazwą.
Jednakże zanim komunikacja pomiędzy wirtualnymi maszynami będzie możliwa muszą one nawiązać ze sobą połączenie, co wiąże się ze znajomością adresu zdalnego hosta. Poza komunikacją poprzez przekazywanie wiadomości, standardowa biblioteka udostępnia moduł rpc (ang. *remote procedure call*), który umożliwia zdalne wykonywanie procedur na określonym węźle w sieci.

## Dyskusja

Skalowalność pionowa z perspektywy Elixira jest *wbudowana* w język. Jego wirtualna maszyna była projektowana z myślą o systemach wieloprocesorowych i wielordzeniowych. Ma to ułatwić programistom prace na skomplikowanych architekturach sprzętowych, umożliwić unikanie błędów powszechnych przy użyciu tradycyjnych metod. Jednakże, programowanie w Elixirze uniemożliwia dostęp do niskopoziomowych abstraktów, jak wątki, co z kolei odbiera twórcom systemów informatycznych kontrolę nad komputerem.
Douglas C. Schmidt stworzył wzorzec Reaktor z pobudek podobnych do tych, którymi kierowali się projektanci BEAM, ograniczenie liczby defektów spowodowanych błędami manualnego zarządzania przetwarzaniem w środowisku wielowątkowym. Chociaż powody są identyczne, zastosowano znacznie różniące się podejścia. Pomimo możliwości wykorzystania wielu procesów jednocześnie, głównym założeniem Node.js jest wykorzystanie jednowątkowego demultipleksera. Problemy wielowątkowości zostały w znacznej mierze rozwiązane, lecz skalowalność wciąż jest źródłem komplikacji.
Java jest najbardziej elastyczna z tej trójki. Pojęcie wątków wciąż istnieje i może być wykorzystywane, jeśli weźmie się pod uwagę ryzyko. Udostępnione narzędzia usprawniające pracę z nimi, jak *executor* lub *fork-join pool*, pomimo zmniejszenia złożoności procesu, nie eliminują możliwości powstawania zakleszczeń czy problemu zagłodzenia.
Dzięki uniwersalnym narzędziom istnieje możliwość, do pewnego stopnia, skalowania każdej stworzonej aplikacji sieciowej. Niestety jest to podejście bardzo ogólne, gdy potrzebna jest większa kontrola nad systemem takie zabiegi są niewystarczające. W przypadku architektur monolitycznych otrzymuje się zbędną redundancję, gdyż powielane są nie tylko elementy krytyczne z punktu widzenia wydajności, a komplet funkcjonalności. 
Java udostępnia możliwość sieciowej komunikacji komponentów poprzez zdalne wykonywanie metod w EJB. Statyczną konfigurację, wymaganą przez tę technologię, można uzupełnić za pomocą zewnętrznych narzędzi. Podstawowym dodatkiem są serwery DNS, które umożliwiają posługiwanie się nazwami zamiast adresami usług, dzięki czemu można przekonfigurować architekturę systemu bez konieczności ingerencji w działanie aplikacji.
Kod w Elixirze nie wymaga dodatkowych konstrukcji językowych do komunikacji międzyprocesowej przy użyciu wiadomości, gdyż potrzebny jest jedynie identyfikator procesu. Jednakże, należy pamiętać o nawiązaniu połączenie z siecią wirtualnych maszyn. W tym przypadku, podobnie jak przy użyciu EJB w Javie, można skorzystać z serwerów DNS. Tego rodzaju narzędzia umożliwiają również rozwiązywanie adresów węzłów aplikacji przy korzystaniu z modułu rpc.
Node.js nie udostępnia abstrakcji komunikacji rozproszonej.