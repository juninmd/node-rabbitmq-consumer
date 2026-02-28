```markdown
# AGENTS.md - Coding Guidelines

These guidelines outline the standards for development of AGENTS.md, a repository for AI coding agents. Adherence to these principles is mandatory for all development activities.

## 1. DRY (Don't Repeat Yourself)

- All code should have a single, clearly defined purpose.
- Avoid duplicating logic, data structures, or algorithms across multiple files.
- When a task is repeated, create a reusable component or function.
- Leverage existing libraries and components whenever possible.

## 2. KISS (Keep It Simple, Stupid)

- Write code that is easy to understand and maintain.
- Favor concise and straightforward solutions over overly complex ones.
- Minimize complexity within individual functions and modules.
- Reduce cognitive load on the developer.

## 3. SOLID Principles

- **Single Responsibility Principle:** Each class or module should have one, and only one, reason to change.
- **Open/Closed Principle:**  The system should be extensible without modification.  New functionality should be added via new classes or modules, not by modifying existing ones.
- **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
- **Interface Segregation Principle:** Clients should not be required to provide data they do not use.
- **Dependency Inversion Principle:**  High-level modules should not depend on low-level modules; they should be dependent on abstractions.

## 4. YAGNI (You Aren't Gonna Need It)

- Avoid implementing functionality that is not currently required.
-  Refactor and improve existing code without introducing new requirements.
-  Focus on delivering working solutions and then improve later.  Don’t prematurely optimize.

## 5. Code Structure & File Size

- Each file should contain a single, well-defined purpose.
- File sizes should be generally less than 180 lines (approximately).
- File names should be descriptive and follow a consistent naming convention.
- Use clear and concise comments to explain complex logic.

## 6. Testing & Coverage

- All development must be productive.
- Unit tests should be written to cover all core functionalities.
- Tests should be automated and run frequently.
- Test coverage should be at least 80%.  Automated test suites will be enforced.
-  Tests should verify expected outcomes and edge cases.

## 7. Data Handling

- Data should be handled consistently and immutably.
- Avoid creating global variables for data.
- Use appropriate data structures for the task.
- Data transformations should be clearly documented.
-  Utilize immutable data structures where appropriate.

## 8.  AI Agent Specific Considerations

-  Maintain clear separation of concerns for the AI agent logic.
-  Design for modularity and easy integration of new AI capabilities.
-  Ensure all code adheres to best practices for AI agent development.

## 9.  Error Handling

-  Provide informative error messages.
-  Log errors effectively.
-  Implement appropriate exception handling.

## 10. Code Style & Formatting

- Follow the established code style guidelines.
- Use consistent indentation and spacing.
- Integrate a code formatter (e.g., black) for automated code formatting.

## 11.  Documentation

- Provide clear and concise documentation for all code.
- Include explanations of algorithms, data structures, and design choices.

## 12.  Version Control

- Utilize a version control system (e.g., Git) for all code changes.
- Commit frequently with meaningful messages.
- Follow a clear branching strategy.

## 13.  Dependencies

- Explicitly declare all dependencies.
- Keep dependencies up-to-date.
- Utilize dependency management tools (e.g., pip, Poetry).

## 14.  Code Reviews

- All code must be reviewed by at least one other team member.
- Code reviews should focus on correctness, clarity, and adherence to guidelines.

## 15.  Continuous Improvement

- Regularly review the guidelines and update them as needed.
- Encourage feedback and suggestions from the development team.
- Iterate on the code based on testing results and feedback.

```