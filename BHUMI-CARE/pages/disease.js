// Disease data
const diseases = [
    {
        id: 1,
        name: "Powdery Mildew",
        crops: ["Grapes", "Cucurbits", "Cereals"],
        symptoms: "White powdery spots on leaves and stems",
        causes: "Fungal infection",
        remedies: ["Apply fungicides", "Improve air circulation", "Remove infected parts"],
        type: "fungal",
        severity: "medium"
    },
    {
        id: 2,
        name: "Downy Mildew",
        crops: ["Lettuce", "Onions", "Grapes"],
        symptoms: "Yellow spots on upper leaf surfaces; gray mold below",
        causes: "Oomycete pathogens",
        remedies: ["Use resistant varieties", "Ensure proper spacing", "Apply appropriate fungicides"],
        type: "fungal",
        severity: "high"
    },
    {
        id: 3,
        name: "Late Blight",
        crops: ["Potatoes", "Tomatoes"],
        symptoms: "Dark lesions on leaves and stems; tuber rot",
        causes: "Phytophthora infestans",
        remedies: ["Use certified seeds", "Apply fungicides", "Remove infected plants"],
        type: "fungal",
        severity: "high"
    },
    {
        id: 4,
        name: "Early Blight",
        crops: ["Tomatoes", "Potatoes"],
        symptoms: "Concentric rings on leaves; fruit rot",
        causes: "Alternaria solani",
        remedies: ["Crop rotation", "Remove debris", "Apply fungicides"],
        type: "fungal",
        severity: "medium"
    },
    {
        id: 5,
        name: "Fusarium Wilt",
        crops: ["Tomatoes", "Bananas"],
        symptoms: "Yellowing and wilting of leaves",
        causes: "Fusarium oxysporum",
        remedies: ["Use resistant varieties", "Soil solarization", "Crop rotation"],
        type: "fungal",
        severity: "high"
    },
    {
        id: 6,
        name: "Bacterial Blight",
        crops: ["Rice", "Beans"],
        symptoms: "Water-soaked lesions; leaf wilting",
        causes: "Xanthomonas species",
        remedies: ["Use resistant varieties", "Avoid overhead irrigation", "Apply bactericides"],
        type: "bacterial",
        severity: "high"
    },
    {
        id: 7,
        name: "Anthracnose",
        crops: ["Beans", "Mangoes"],
        symptoms: "Dark, sunken lesions on fruits and leaves",
        causes: "Colletotrichum species",
        remedies: ["Use disease-free seeds", "Apply fungicides", "Remove infected debris"],
        type: "fungal",
        severity: "medium"
    },
    {
        id: 8,
        name: "Rust",
        crops: ["Wheat", "Beans"],
        symptoms: "Reddish-brown pustules on leaves",
        causes: "Puccinia species",
        remedies: ["Plant resistant varieties", "Apply fungicides", "Remove volunteer plants"],
        type: "fungal",
        severity: "medium"
    },
    {
        id: 9,
        name: "Mosaic Virus",
        crops: ["Tobacco", "Cucumbers"],
        symptoms: "Mottled light and dark green patterns on leaves",
        causes: "Viral infection via insect vectors",
        remedies: ["Control insect vectors", "Remove infected plants", "Use resistant varieties"],
        type: "viral",
        severity: "high"
    },
    {
        id: 10,
        name: "Leaf Spot",
        crops: ["Beets", "Carrots"],
        symptoms: "Circular spots on leaves",
        causes: "Fungal or bacterial pathogens",
        remedies: ["Remove infected leaves", "Apply appropriate fungicides or bactericides"],
        type: "fungal",
        severity: "low"
    },
    {
        id: 11,
        name: "Verticillium Wilt",
        crops: ["Cotton", "Tomatoes"],
        symptoms: "Wilting and yellowing of leaves",
        causes: "Verticillium species",
        remedies: ["Plant resistant varieties", "Remove infected plants"],
        type: "fungal",
        severity: "high"
    },
    {
        id: 12,
        name: "Bacterial Wilt",
        crops: ["Tomatoes", "Potatoes"],
        symptoms: "Sudden wilting without yellowing",
        causes: "Ralstonia solanacearum",
        remedies: ["Crop rotation", "Use resistant varieties", "Soil drainage improvement"],
        type: "bacterial",
        severity: "high"
    },
    {
        id: 13,
        name: "Black Sigatoka",
        crops: ["Bananas"],
        symptoms: "Dark streaks on leaves; reduced fruit yield",
        causes: "Mycosphaerella fijiensis",
        remedies: ["Remove infected leaves", "Apply fungicides", "Improve air circulation"],
        type: "fungal",
        severity: "high"
    },
    {
        id: 14,
        name: "Smut",
        crops: ["Corn", "Wheat"],
        symptoms: "Tumor-like galls on ears and kernels",
        causes: "Ustilago species",
        remedies: ["Use resistant varieties", "Crop rotation", "Remove infected plants"],
        type: "fungal",
        severity: "medium"
    },
    {
        id: 15,
        name: "Scab",
        crops: ["Apples", "Potatoes"],
        symptoms: "Rough lesions on fruits and tubers",
        causes: "Venturia and Streptomyces species",
        remedies: ["Use resistant varieties", "Apply fungicides", "Proper irrigation management"],
        type: "fungal",
        severity: "medium"
    },
    {
        id: 16,
        name: "Canker",
        crops: ["Citrus", "Apples"],
        symptoms: "Sunken, dead areas on stems and branches",
        causes: "Fungal or bacterial pathogens",
        remedies: ["Prune infected areas", "Apply protective sprays", "Improve tree vigor"],
        type: "fungal",
        severity: "medium"
    },
    {
        id: 17,
        name: "Clubroot",
        crops: ["Cabbage", "Broccoli"],
        symptoms: "Swollen, deformed roots; stunted growth",
        causes: "Plasmodiophora brassicae",
        remedies: ["Maintain soil pH above 7.2", "Crop rotation", "Use resistant varieties"],
        type: "fungal",
        severity: "high"
    },
    {
        id: 18,
        name: "Damping-Off",
        crops: ["Seedlings of various crops"],
        symptoms: "Seedlings collapse and die",
        causes: "Soil-borne fungi",
        remedies: ["Ensure proper drainage", "Avoid overwatering", "Use sterilized soil"],
        type: "fungal",
        severity: "medium"
    },
    {
        id: 19,
        name: "Root Rot",
        crops: ["Beans", "Soybeans"],
        symptoms: "Decayed roots; yellowing leaves",
        causes: "Fungal pathogens in waterlogged soils",
        remedies: ["Improve soil drainage", "Avoid overwatering", "Apply fungicides"],
        type: "fungal",
        severity: "high"
    },
    {
        id: 20,
        name: "Sooty Mold",
        crops: ["Citrus", "Ornamentals"],
        symptoms: "Black, sooty coating on leaves",
        causes: "Fungal growth on honeydew excretions",
        remedies: ["Control sap-sucking insects", "Wash off mold", "Improve air circulation"],
        type: "fungal",
        severity: "low"
    }
];

// DOM Elements
const diseaseGrid = document.querySelector('.disease-grid');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const cropTypeFilter = document.getElementById('cropType');
const diseaseTypeFilter = document.getElementById('diseaseType');
const severityFilter = document.getElementById('severity');
const modal = document.getElementById('diseaseModal');
const modalContent = document.getElementById('diseaseDetails');
const closeModal = document.querySelector('.close');

// Initialize the page
function initializePage() {
    renderDiseaseCards(diseases);
    setupEventListeners();
}

// Render disease cards
function renderDiseaseCards(diseasesToRender) {
    diseaseGrid.innerHTML = '';
    diseasesToRender.forEach(disease => {
        const card = createDiseaseCard(disease);
        diseaseGrid.appendChild(card);
    });
}

// Create a disease card
function createDiseaseCard(disease) {
    const card = document.createElement('div');
    card.className = 'disease-card';
    card.innerHTML = `
        <div class="disease-card-content">
            <h3>${disease.name}</h3>
            <p><strong>Affected Crops:</strong> ${disease.crops.join(', ')}</p>
            <p><strong>Symptoms:</strong> ${disease.symptoms}</p>
            <a href="#" class="learn-more" data-disease-id="${disease.id}">Learn More</a>
        </div>
    `;
    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    // Filter functionality
    cropTypeFilter.addEventListener('change', handleFilters);
    diseaseTypeFilter.addEventListener('change', handleFilters);
    severityFilter.addEventListener('change', handleFilters);

    // Modal functionality
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Learn More click handler
    diseaseGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('learn-more')) {
            e.preventDefault();
            const diseaseId = parseInt(e.target.dataset.diseaseId);
            showDiseaseDetails(diseaseId);
        }
    });
}

// Handle search
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredDiseases = diseases.filter(disease => 
        disease.name.toLowerCase().includes(searchTerm) ||
        disease.symptoms.toLowerCase().includes(searchTerm) ||
        disease.crops.some(crop => crop.toLowerCase().includes(searchTerm))
    );
    renderDiseaseCards(filteredDiseases);
}

// Handle filters
function handleFilters() {
    const cropType = cropTypeFilter.value;
    const diseaseType = diseaseTypeFilter.value;
    const severity = severityFilter.value;

    const filteredDiseases = diseases.filter(disease => {
        const matchesCropType = !cropType || disease.crops.some(crop => crop.toLowerCase().includes(cropType));
        const matchesDiseaseType = !diseaseType || disease.type === diseaseType;
        const matchesSeverity = !severity || disease.severity === severity;
        return matchesCropType && matchesDiseaseType && matchesSeverity;
    });

    renderDiseaseCards(filteredDiseases);
}

// Show disease details in modal
function showDiseaseDetails(diseaseId) {
    const disease = diseases.find(d => d.id === diseaseId);
    if (!disease) return;

    modalContent.innerHTML = `
        <h2>${disease.name}</h2>
        <div class="disease-details">
            <h3>Affected Crops</h3>
            <p>${disease.crops.join(', ')}</p>
            
            <h3>Symptoms</h3>
            <p>${disease.symptoms}</p>
            
            <h3>Causes</h3>
            <p>${disease.causes}</p>
            
            <h3>Remedies and Management</h3>
            <ul>
                ${disease.remedies.map(remedy => `<li>${remedy}</li>`).join('')}
            </ul>
            
            <h3>Preventive Measures</h3>
            <ul>
                <li>Regular monitoring of crops</li>
                <li>Maintain proper plant spacing</li>
                <li>Ensure good air circulation</li>
                <li>Practice crop rotation</li>
                <li>Use disease-resistant varieties when available</li>
            </ul>
        </div>
    `;

    modal.style.display = 'block';
}

// Initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage); 