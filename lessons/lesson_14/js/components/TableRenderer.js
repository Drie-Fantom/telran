
export class TableRenderer {
    constructor(rootElement) {
        this.root = rootElement;
    }
    render(data, fields) {
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');

            fields.forEach(field => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('item__field');

                if (typeof item[field] === 'object') {
                    Object.entries(item[field]).forEach(([nestedKey, nestedValue]) => {
                        const nestedDiv = document.createElement('div');
                        nestedDiv.classList.add('item__nested-field');
                        nestedDiv.textContent = `${nestedKey}: ${nestedValue}`;
                        itemDiv.appendChild(nestedDiv);
                    });
                } else {
                    itemDiv.textContent = `${field}: ${item[field]}`;
                }

                itemElement.appendChild(itemDiv);
            });

            this.root.appendChild(itemElement);
        });
    }
}