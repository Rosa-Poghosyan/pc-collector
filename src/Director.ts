import ComputerBuilder from "./ComputerBuilder";

/**
 * The Director class is responsible for orchestrating the construction process
 * of different types of computers using a specific builder. It delegates the
 * construction steps to the builder and can produce different kinds of computers.
 */
export default class Director {
    private builder!: ComputerBuilder;

    /**
     * Sets the builder that will be used to construct the computer.
     * @param {ComputerBuilder} builder The builder instance to set.
     */
    setBuilder(builder: ComputerBuilder): void {
        this.builder = builder;
    }

    /**
     * Constructs a high-performance gaming PC by directing the builder
     * to assemble each component tailored for gaming.
     * @returns {ComputerBuilder} The builder instance, with all components built.
     */
    constructGamingPC(): ComputerBuilder {
        return this.builder
            .buildProcessor()
            .buildGraphics()
            .buildMemory()
            .buildDisk()
            .buildOperatingSystem();
    }

    /**
     * Constructs a standard office PC suitable for productivity tasks.
     * @returns {ComputerBuilder} The builder instance, with all components built.
     */
    constructOfficePC(): ComputerBuilder {
        return this.builder
            .buildProcessor()
            .buildGraphics()
            .buildMemory()
            .buildDisk()
            .buildOperatingSystem();
    }

    /**
     * Constructs a budget-friendly PC with essential components for basic tasks.
     * @returns {ComputerBuilder} The builder instance, with all components built.
     */
    constructBudgetPC(): ComputerBuilder {
        return this.builder
            .buildProcessor()
            .buildGraphics()
            .buildMemory()
            .buildDisk()
            .buildOperatingSystem();
    }
}
