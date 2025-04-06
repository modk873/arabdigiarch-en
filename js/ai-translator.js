// AI Translation Service
class AITranslator {
    constructor() {
        this.apiKey = ''; // You'll need to add your Google Cloud API key here
        this.baseUrl = 'https://translation.googleapis.com/language/translate/v2';
    }

    async translateText(text, targetLang) {
        try {
            const response = await fetch(`${this.baseUrl}?key=${this.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    q: text,
                    target: targetLang,
                    format: 'html'
                })
            });

            const data = await response.json();
            if (data.data && data.data.translations) {
                return data.data.translations[0].translatedText;
            }
            throw new Error('Translation failed');
        } catch (error) {
            console.error('Translation error:', error);
            return text; // Return original text if translation fails
        }
    }

    async translatePage(targetLang) {
        const elements = document.querySelectorAll('[data-translate]');
        for (const element of elements) {
            const originalText = element.textContent;
            const translatedText = await this.translateText(originalText, targetLang);
            element.textContent = translatedText;
        }
    }
}

// Initialize the translator
const aiTranslator = new AITranslator();

// Function to toggle between AI translation and static translation
async function toggleAITranslation() {
    const isAIEnabled = document.body.classList.toggle('ai-translation-enabled');
    const toggleBtn = document.getElementById('aiToggle');
    
    if (isAIEnabled) {
        toggleBtn.innerHTML = '<i class="fas fa-robot"></i><span>Static Translation</span>';
        // Use AI translation
        await aiTranslator.translatePage(currentLang);
    } else {
        toggleBtn.innerHTML = '<i class="fas fa-robot"></i><span>AI Translation</span>';
        // Use static translation
        updateContent();
    }
} 