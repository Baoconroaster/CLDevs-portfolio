
export function replaceNezurWithCLDevs(text: string): string {
  // Replace all occurrences of "Nezur" (case-sensitive)
  return text.replace(/Nezur/g, "CLDevs");
}

// Additional function for case-insensitive replacement
export function replaceNezurWithCLDevsInsensitive(text: string): string {
  // Replace all occurrences of "Nezur" (case-insensitive)
  return text.replace(/nezur/gi, "CLDevs");
}

// Function to replace text in DOM elements
export function replaceTextInDocument() {
  // Select all text nodes in the document
  const walker = document.createTreeWalker(
    document.body, 
    NodeFilter.SHOW_TEXT
  );

  const nodesToReplace: Text[] = [];
  let node;
  while (node = walker.nextNode()) {
    if (node.textContent && node.textContent.includes("Nezur")) {
      nodesToReplace.push(node as Text);
    }
  }

  // Replace text in collected nodes
  nodesToReplace.forEach(textNode => {
    if (textNode.textContent) {
      textNode.textContent = replaceNezurWithCLDevs(textNode.textContent);
    }
  });
}
