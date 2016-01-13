# Skalowalność

*Skalowalność*, w kontekście systemów informatycznych, jest zdolnością systemu do efektywnego wykorzystania zwiększonej puli zasobów. Innymi słowy zwiększając możliwości obliczeniowe sprzętu, w ramach którego oprogramowanie jest uruchomione, wydajność powinna się zwiększyć.
Można wyróżnić dwa wymiary skalowalności:

 - pionowa
 - pozioma
\autocite{elrewini2005advanced}

# Skalowalność pionowa

Mówimy o *skalowalności pionowej* jeśli zwiększamy zasoby jednego węzła systemu komputerowego, rdzenie procesora lub pamięć do jednego komputera.\autocite{elrewini2005advanced}

Wirtualna maszyna, z której korzysta Java, jest w stanie użyć wszystkich dostepnych rdzeni procesora. Ich wykorzystanie zależy od użycia mechanizmów współbieżności dostępnych w języku, np. wątków. Wielowątkowość JVM jest zaimplementowana z użyciem natywnych wątków systemów operacyjnych. Dodatkowo Java udostępnia pewne abstrakcje, np. wykonawców (ang. *executor*), mające za zadanie ułatwić programistom prace w wielowątkowym środowisku. Wirtualna maszyna Javy oferuje zbiór parametrów konfiguracyjnych pozwalających na strojenie jej pracy. Dzięki nim można dostosować, między innymi, wykorzystanie pamięci operacyjnej, aby lepiej wykorzystać dostępne zasoby.

Założeniem JavaScriptu, a raczej Node.js, jest użytkowanie jednowątkowego modelu Reaktor. W związku z tym każdy proces aplikacji może wykorzystać tylko jeden wątek systemu operacyjnego. Standardowa biblioteka Node zawiera moduł cluster. Umożliwia on uruchomienie rozwidlenie aplikacji aplikacji za przy użyciu komendy *fork* na zasadzie *master/slave*. Proces *master* jest punktem wejściowym programu i jest odpowiedzialny uruchomienie procesów potomnych. Tworzone procesy, zwane *worker*, odpowiadają za logikę aplikacji. Mogą one współdzielić nasłuchiwany port, wtedy zapytania zostaną automatycznie zbalansowane pomiędzy wszystkie procesy potomne. Zamysłem modułu była proste, niskopoziomowe wsparcie dla wielu procesów, programista jest odpowiedzialny za zarządzanie nimi i obsługę błędów. 

Wirtualna maszyna Erlanga, BEAM, zarządza lekkimi procesami automatycznie, zajmuje się rozdzielaniem dostępnych zasobów pomiędzy jednostki obliczeniowe i harmonogramuje zadania. Jedyną abstrakcją ponad wątkami są lekkie procesy wirtualnej maszyny, modelowane na aktorów. W wypadku, gdy potrzebna jest większa kontrola nad sprzętem, niezbędne jest wykorzystanie natywnych wywołań. Podobnie jak wirtualna maszyna Javy, BEAM udostępnia szereg parametrów konfiguracyjnych, jednak w przeciwieństwie do JVM umożliwia kontrolę nad wykorzystaniem procesorów.

# Skalowalność pozioma

Mówimy o *skalowalności poziomej* jeśli dodajemy kolejne węzły do rozproszonego systemu komputerowego.\autocite{elrewini2005advanced}

Istnieją techniki skalowania aplikacji, które nie były projektowane z myślą o przetwarzaniu rozproszonym. Dzięki nim monolityczne aplikacje, do pewnego stopnia, mogą czerpać korzyść z używania wielu maszyn jednocześnie. Podstawową techniką jest uruchamianie wielu instancji aplikacji oraz zrównoważenie obciążenia pomiędzy nimi. Nie jest to jednak technika wykorzystywana jedynie w przypadku systemów monolitycznych, można ją wykorzystać również dla architektur mikroserwisowych. Powszechną praktyką powielanie wybranych usług w czasie dużego ich obciążenia, często przeprowadzane automatycznie.

Standard Java EE definiuje jednostki EJB (ang. *Enterprise Java Beans*). Służą one do zdalnego wykonywania kodu, wywoływania metod. Mogą one być wykorzystane do komunikacji pomiędzy różnymi maszynami w rozproszonej architekturze. Jednakże używanie ich wymaga wcześniejszej konfiguracji i odpowiedniego oprogramowania usług, aby móc z nich skorzystać. Z tego względu architektura z użyciem EJB jest statyczna i wymaga zmian w kodzie do jej modyfikacji. 

wprowadza złożoność wielu maszyn, trzeba tym zarządzać

typowe dla wszystkich jak loadbalancing 

java rmi, remote ejb do rozproszonych systemów - zależne od systemu, konfiguracja statyczna w kodzie lub plikach konfiguracyjnych xml

js - raczej nie ma remote. tylko loadbalancing. istniją biblioteki, ale nie ma rozwiniętej, dojrzałej

elixir - distributed elixir - przezroczysty, tak jak w jednej maszynie (patrz elixir in action)

## Wnioski