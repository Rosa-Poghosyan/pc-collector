
# PC Collector

PC Collector is a software project that allows you to build and manage configurations of personal computers. It uses the **Builder Design Pattern** to create various types of computers like **gaming PCs**, **office PCs**, and **budget PCs**, by assembling different components (processor, graphics, memory, etc.).

## Features

- Build different types of PCs (Gaming, Office, Budget).
- Easily extendable with more configurations or components.
- Implements the **Builder Pattern** for a flexible construction process.

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/Rosa-Poghosyan/pc-collector.git
    ```

2. Navigate to the project directory:

    ```bash
    cd pc-collector
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Build and run the project.

## Usage

You can use the **Director** class to construct different types of computers by providing the builder. Here's an example:

```typescript
import { Director } from './Director';
import { GamingPCBuilder } from './GamingPCBuilder';
import { OfficePCBuilder } from './OfficePCBuilder';

const director = new Director();

// Build a Gaming PC
director.setBuilder(new GamingPCBuilder());
const gamingPC = director.constructGamingPC();

// Build an Office PC
director.setBuilder(new OfficePCBuilder());
const officePC = director.constructOfficePC();
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
