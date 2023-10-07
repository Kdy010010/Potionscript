function parseValue(value, variables) {
    if (value.startsWith('"') && value.endsWith('"')) {
        return value.slice(1, -1);
    }
    if (variables.hasOwnProperty(value)) {  // Check if variable exists
        return variables[value];
    }
    return parseFloat(value);
}

function importLibrary(url) {
    // For the purpose of demonstration, we'll just log it.
    console.log("Importing library from:", url);
    // Actual implementation for importing a JS library would require more advanced techniques.
}

function getUserInput(message) {
    // Using browser's prompt for demonstration purposes.
    return prompt(message);
}

function interpretPotion(code, outerVariables = {}) {
    const lines = code.trim().split("\n");
    let variables = {...outerVariables};  // Copy variables from outer scope

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line.startsWith("import")) {
            const url = line.split('"')[1];
            importLibrary(url);
        } else if (line.startsWith("store")) {
            const parts = line.split(" ");
            const varName = parts[1];
            const value = parseValue(parts.slice(3).join(" "), variables);
            variables[varName] = value;
        } else if (line.startsWith("show")) {
            console.log(parseValue(line.split(" ")[1], variables));
        } else if (line.startsWith("mix")) {
            let numbers = line.split(" ").slice(1).map(n => parseValue(n, variables));
            variables['_'] = numbers[0] + numbers[1];
        } else if (line.startsWith("subtract")) {
            let numbers = line.split(" ").slice(1).map(n => parseValue(n, variables));
            variables['_'] = numbers[0] - numbers[1];
        } else if (line.startsWith("multiply")) {
            let numbers = line.split(" ").slice(1).map(n => parseValue(n, variables));
            variables['_'] = numbers[0] * numbers[1];
        } else if (line.startsWith("divide")) {
            let numbers = line.split(" ").slice(1).map(n => parseValue(n, variables));
            variables['_'] = numbers[0] / numbers[1];
        } else if (line.startsWith("if")) {
            const condition = !!parseValue(line.split(" ")[1], variables);
            i++;
            const innerCode = [];
            while (!lines[i].startsWith("end")) {
                innerCode.push(lines[i]);
                i++;
            }
            if (condition) {
                interpretPotion(innerCode.join("\n"), variables);
            }
        } else if (line.startsWith("repeat")) {
            let times = parseValue(line.split(" ")[1], variables);
            i++;
            const start = i;
            const innerCode = [];
            while (!lines[i].startsWith("end")) {
                innerCode.push(lines[i]);
                i++;
            }
            while (times-- > 0) {
                interpretPotion(innerCode.join("\n"), variables);
            }
        } else if (line.startsWith("getUserInput")) {
            const message = line.split('"')[1];
            variables['_'] = getUserInput(message);
        } else if (line === "exit") {
            return;
        }
    }
}

window.onload = function() {
    let potions = document.querySelectorAll('script[type="text/potion"]');
    for (let potion of potions) {
        interpretPotion(potion.textContent);
    }
};

