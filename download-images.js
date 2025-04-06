/**
 * Image Download Script for Arab Countries Archive Website
 * 
 * This script provides links to free stock photos that can be used for the website.
 * To use these images:
 * 1. Click on each link to open the image
 * 2. Right-click on the image and select "Save Image As..."
 * 3. Save the image to the "images" folder in your project
 * 4. Use the suggested filename when saving
 */

// Image sources and recommended filenames
const imageLinks = {
    // Main page images
    "hero-bg.jpg": "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "about-image.jpg": "https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    
    // Country card images
    "qatar.jpg": "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "jordan.jpg": "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "sudan.jpg": "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "palestine.jpg": "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    
    // Qatar gallery images
    "qatar-header.jpg": "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "qatar-museum.jpg": "https://images.unsplash.com/photo-1559386081-325882507af7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "qatar-souq.jpg": "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "qatar-pearl.jpg": "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "qatar-gallery-1.jpg": "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "qatar-gallery-2.jpg": "https://images.unsplash.com/photo-1563990308267-cd6d3cc09318?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "qatar-gallery-3.jpg": "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "qatar-gallery-4.jpg": "https://images.unsplash.com/photo-1559386081-325882507af7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "qatar-gallery-5.jpg": "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "qatar-gallery-6.jpg": "https://images.unsplash.com/photo-1559386081-325882507af7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "qatar-gallery-7.jpg": "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "qatar-gallery-8.jpg": "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    
    // Jordan gallery images
    "jordan-header.jpg": "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "jordan-petra.jpg": "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "jordan-dead-sea.jpg": "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "jordan-amman.jpg": "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "jordan-gallery-1.jpg": "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "jordan-gallery-2.jpg": "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "jordan-gallery-3.jpg": "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "jordan-gallery-4.jpg": "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "jordan-gallery-5.jpg": "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "jordan-gallery-6.jpg": "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "jordan-gallery-7.jpg": "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "jordan-gallery-8.jpg": "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    
    // Sudan gallery images
    "sudan-header.jpg": "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "sudan-pyramids.jpg": "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "sudan-nile.jpg": "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "sudan-khartoum.jpg": "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "sudan-gallery-1.jpg": "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "sudan-gallery-2.jpg": "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "sudan-gallery-3.jpg": "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "sudan-gallery-4.jpg": "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "sudan-gallery-5.jpg": "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "sudan-gallery-6.jpg": "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "sudan-gallery-7.jpg": "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "sudan-gallery-8.jpg": "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    
    // Palestine gallery images
    "palestine-header.jpg": "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "palestine-jerusalem.jpg": "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "palestine-bethlehem.jpg": "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "palestine-gaza.jpg": "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "palestine-gallery-1.jpg": "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "palestine-gallery-2.jpg": "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "palestine-gallery-3.jpg": "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "palestine-gallery-4.jpg": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "palestine-gallery-5.jpg": "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "palestine-gallery-6.jpg": "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "palestine-gallery-7.jpg": "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "palestine-gallery-8.jpg": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    
    // Team member images
    "team-1.jpg": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "team-2.jpg": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "team-3.jpg": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "team-4.jpg": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
};

// Create HTML to display the images and download links
document.addEventListener('DOMContentLoaded', function() {
    const container = document.createElement('div');
    container.style.maxWidth = '1200px';
    container.style.margin = '0 auto';
    container.style.padding = '20px';
    container.style.fontFamily = 'Arial, sans-serif';
    
    // Add title
    const title = document.createElement('h1');
    title.textContent = 'Image Downloads for Arab Countries Archive Website';
    title.style.textAlign = 'center';
    title.style.marginBottom = '30px';
    container.appendChild(title);
    
    // Add instructions
    const instructions = document.createElement('div');
    instructions.innerHTML = `
        <h2>Instructions:</h2>
        <ol>
            <li>Click on each image to open it in a new tab</li>
            <li>Right-click on the image and select "Save Image As..."</li>
            <li>Save the image to the "images" folder in your project</li>
            <li>Use the suggested filename when saving</li>
        </ol>
        <p><strong>Note:</strong> Make sure you have created an "images" folder in your project directory.</p>
        <p>All images are from Unsplash and are free to use under the <a href="https://unsplash.com/license" target="_blank">Unsplash License</a>.</p>
    `;
    instructions.style.marginBottom = '30px';
    container.appendChild(instructions);
    
    // Create image grid
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(250px, 1fr))';
    grid.style.gap = '20px';
    
    // Add each image to the grid
    Object.entries(imageLinks).forEach(([filename, url]) => {
        const card = document.createElement('div');
        card.style.border = '1px solid #ddd';
        card.style.borderRadius = '8px';
        card.style.overflow = 'hidden';
        card.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        
        const img = document.createElement('img');
        img.src = url;
        img.alt = filename;
        img.style.width = '100%';
        img.style.height = '150px';
        img.style.objectFit = 'cover';
        
        const info = document.createElement('div');
        info.style.padding = '15px';
        
        const name = document.createElement('p');
        name.textContent = filename;
        name.style.fontWeight = 'bold';
        name.style.marginBottom = '10px';
        
        const link = document.createElement('a');
        link.href = url;
        link.textContent = 'Open Image';
        link.target = '_blank';
        link.style.display = 'inline-block';
        link.style.padding = '8px 15px';
        link.style.backgroundColor = '#10b981';
        link.style.color = 'white';
        link.style.textDecoration = 'none';
        link.style.borderRadius = '4px';
        
        info.appendChild(name);
        info.appendChild(link);
        card.appendChild(img);
        card.appendChild(info);
        grid.appendChild(card);
    });
    
    container.appendChild(grid);
    document.body.appendChild(container);
});

// If you're viewing this in a code editor, open this file in a browser to see the download page
console.log('Open this file in a web browser to see the image download interface'); 