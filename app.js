const stepsData = [
    {
        id: 1,
        title: "Voter Registration",
        icon: "ph-user-plus",
        roles: {
            voter: "<ul><li>As a voter, you must be an Indian citizen and 18+ years old.</li><li>You need to fill Form 6 to register on the electoral roll.</li><li>You can register online via the NVSP portal or offline.</li></ul>",
            candidate: "<ul><li>Ensure your name is correctly listed in the electoral roll of the constituency you want to contest from.</li><li>Without being a registered voter, you cannot become a candidate.</li></ul>",
            officer: "<ul><li>Your duty is to organize registration camps.</li><li>Verify applications (Form 6, 7, 8) and update the electoral rolls correctly.</li><li>Ensure no eligible voter is left out.</li></ul>"
        }
    },
    {
        id: 2,
        title: "Candidate Nomination",
        icon: "ph-files",
        roles: {
            voter: "<ul><li>During this time, candidates from various parties will file their papers.</li><li>You can check the affidavits of candidates to see their background, assets, and criminal records.</li></ul>",
            candidate: "<ul><li>You must file your nomination papers before the deadline.</li><li>Submit a security deposit and an affidavit detailing your assets and background.</li><li>You must be at least 25 years old for Lok Sabha.</li></ul>",
            officer: "<ul><li>Receive nomination papers from candidates.</li><li>Scrutinize the papers for errors or false information.</li><li>Publish the final list of contesting candidates.</li></ul>"
        }
    },
    {
        id: 3,
        title: "Campaigning",
        icon: "ph-megaphone",
        roles: {
            voter: "<ul><li>Listen to what different parties are offering (Manifestos).</li><li>Attend rallies or debates to understand the candidates.</li><li>Do not accept bribes for votes.</li></ul>",
            candidate: "<ul><li>Hold public rallies, door-to-door campaigns, and distribute manifestos.</li><li>Strictly follow the Model Code of Conduct (MCC).</li><li>Stop campaigning 48 hours before polling begins.</li></ul>",
            officer: "<ul><li>Monitor campaign expenses of all candidates.</li><li>Ensure strict adherence to the Model Code of Conduct (MCC).</li><li>Take action against hate speech or bribery.</li></ul>"
        }
    },
    {
        id: 4,
        title: "Voting Process",
        icon: "ph-hand-pointing",
        roles: {
            voter: "<ul><li>Go to your designated polling booth with your Voter ID (EPIC).</li><li>Press the blue button on the EVM next to your chosen candidate.</li><li>Check the VVPAT slip to verify your vote was recorded correctly.</li></ul>",
            candidate: "<ul><li>You can appoint polling agents to sit inside booths to ensure fairness.</li><li>You cannot canvass for votes within 100 meters of the polling station.</li></ul>",
            officer: "<ul><li>Set up the EVMs and VVPATs and conduct a mock poll before actual voting starts.</li><li>Verify voter identities and apply indelible ink on their finger.</li><li>Ensure the security of the EVMs after polling ends.</li></ul>"
        }
    },
    {
        id: 5,
        title: "Counting of Votes",
        icon: "ph-calculator",
        roles: {
            voter: "<ul><li>Wait for the official counting day.</li><li>You can watch live trends on the Election Commission website or news channels.</li></ul>",
            candidate: "<ul><li>You or your counting agents can be present at the counting center.</li><li>Ensure the EVM seals are intact before counting begins.</li></ul>",
            officer: "<ul><li>Open EVMs in the presence of candidates/agents under camera surveillance.</li><li>Count votes round by round and announce trends.</li><li>Tally EVM counts with VVPAT slips randomly if required.</li></ul>"
        }
    },
    {
        id: 6,
        title: "Result Declaration",
        icon: "ph-trophy",
        roles: {
            voter: "<ul><li>The candidate with the most votes in your constituency wins.</li><li>Accept the democratic mandate.</li></ul>",
            candidate: "<ul><li>If you win, you receive a certificate of election from the Returning Officer.</li><li>If you lose, respect the mandate and prepare for the next election.</li></ul>",
            officer: "<ul><li>Compile final results and declare the winner officially.</li><li>Hand over the certificate of election to the winning candidate.</li><li>Send reports to the Election Commission.</li></ul>"
        }
    }
];

const quizData = [
    { q: "What is the minimum age to register as a voter in India?", opts: ["16", "18", "21", "25"], ans: 1 },
    { q: "What is the minimum age to contest for Lok Sabha?", opts: ["18", "21", "25", "30"], ans: 2 },
    { q: "When must campaigning stop before polling?", opts: ["12 hours", "24 hours", "48 hours", "72 hours"], ans: 2 },
    { q: "What does VVPAT allow the voter to do?", opts: ["Cast multiple votes", "Verify their vote on a paper slip", "Vote from home", "Register a complaint"], ans: 1 },
    { q: "Who is allowed inside the counting center?", opts: ["Only the public", "Only the media", "Election Officers and Candidate's Agents", "Anyone"], ans: 2 },
    { q: "Who issues the certificate of election to the winner?", opts: ["The Prime Minister", "The Returning Officer", "The Supreme Court", "The Police"], ans: 1 }
];

const flashcardsData = [
    { term: "EVM", def: "Electronic Voting Machine. Used in Indian elections to record votes securely without paper ballots." },
    { term: "VVPAT", def: "Voter Verifiable Paper Audit Trail. A slip of paper printed to let voters verify their EVM vote." },
    { term: "NOTA", def: "None Of The Above. A button allowing voters to officially reject all candidates on the list." },
    { term: "MCC", def: "Model Code of Conduct. Rules for candidates and parties to ensure free and fair campaigning." }
];

let selectedRole = "voter";

// DOM Elements
const elRoleSelect = document.getElementById('role-select');
const elTimeline = document.getElementById('timeline');
const elStepsContainer = document.getElementById('steps-container');

document.addEventListener('DOMContentLoaded', () => {
    renderProcess();
    initQuiz();
    initFlashcards();
    initChat();

    elRoleSelect.addEventListener('change', (e) => {
        selectedRole = e.target.value;
        renderProcess();
    });
});

function renderProcess() {
    elTimeline.innerHTML = '';
    elStepsContainer.innerHTML = '';

    stepsData.forEach((step, idx) => {
        // Render Timeline Links
        const link = document.createElement('a');
        link.href = `#step-${step.id}`;
        link.className = 'tl-link';
        link.innerHTML = `<div class="tl-num">${step.id}</div><span>${step.title}</span>`;
        elTimeline.appendChild(link);

        // Render Step Cards
        const card = document.createElement('div');
        card.className = 'step-card glass';
        card.id = `step-${step.id}`;
        
        card.innerHTML = `
            <div class="step-header">
                <div class="step-icon"><i class="ph ${step.icon}"></i></div>
                <h3>${step.id}. ${step.title}</h3>
            </div>
            <div class="step-body">
                ${step.roles[selectedRole]}
            </div>
        `;
        elStepsContainer.appendChild(card);
    });
}

// Flashcards
let fcIndex = 0;
function initFlashcards() {
    updateFC();
    document.getElementById('fc-prev').addEventListener('click', (e) => {
        e.stopPropagation();
        fcIndex = (fcIndex - 1 + flashcardsData.length) % flashcardsData.length;
        updateFC();
    });
    document.getElementById('fc-next').addEventListener('click', (e) => {
        e.stopPropagation();
        fcIndex = (fcIndex + 1) % flashcardsData.length;
        updateFC();
    });
}

function updateFC() {
    document.querySelector('.flashcard-container').classList.remove('flipped');
    setTimeout(() => {
        document.getElementById('fc-term').textContent = flashcardsData[fcIndex].term;
        document.getElementById('fc-def').textContent = flashcardsData[fcIndex].def;
        document.getElementById('fc-count').textContent = `${fcIndex + 1}/${flashcardsData.length}`;
    }, 150);
}

// Global Quiz
let currentQIndex = 0;
let score = 0;

function initQuiz() {
    loadQuizQuestion();
    document.getElementById('quiz-next').addEventListener('click', () => {
        currentQIndex++;
        if (currentQIndex < quizData.length) {
            loadQuizQuestion();
        } else {
            document.getElementById('quiz-q').textContent = "Quiz Completed!";
            document.getElementById('quiz-options').innerHTML = `<h3 style="text-align:center; color: var(--accent-saffron); font-size: 2rem;">Score: ${score}/${quizData.length}</h3>`;
            document.getElementById('quiz-feedback').textContent = '';
            document.getElementById('quiz-next').style.display = 'none';
        }
    });
}

function loadQuizQuestion() {
    const quiz = quizData[currentQIndex];
    document.getElementById('quiz-q').textContent = `${currentQIndex + 1}. ${quiz.q}`;
    const optsContainer = document.getElementById('quiz-options');
    optsContainer.innerHTML = '';
    document.getElementById('quiz-feedback').textContent = '';
    document.getElementById('quiz-next').style.display = 'none';
    
    quiz.opts.forEach((opt, idx) => {
        const btn = document.createElement('div');
        btn.className = 'quiz-opt';
        btn.textContent = opt;
        btn.onclick = () => {
            Array.from(optsContainer.children).forEach(c => c.style.pointerEvents = 'none');
            if (idx === quiz.ans) {
                btn.classList.add('correct');
                score++;
                document.getElementById('quiz-feedback').textContent = '✅ Correct!';
                document.getElementById('quiz-feedback').style.color = 'var(--accent-green)';
            } else {
                btn.classList.add('wrong');
                optsContainer.children[quiz.ans].classList.add('correct');
                document.getElementById('quiz-feedback').textContent = '❌ Incorrect.';
                document.getElementById('quiz-feedback').style.color = '#EF4444';
            }
            document.getElementById('quiz-next').style.display = 'inline-block';
        };
        optsContainer.appendChild(btn);
    });
}

// Embedded Chatbot
function initChat() {
    const modeBtns = document.querySelectorAll('.mode-btn');
    const freeInput = document.getElementById('chat-input-area');
    const guidedControls = document.getElementById('guided-controls');
    
    let isGuided = false;
    let guidedStep = 0;

    modeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            isGuided = btn.getAttribute('data-mode') === 'guided';
            
            if (isGuided) {
                freeInput.style.display = 'none';
                guidedControls.style.display = 'flex';
                document.getElementById('chat-messages').innerHTML = '';
                guidedStep = 0;
                addBotMsg("Let's start the guided tour! I'll walk you through the election process. First up: Voter Registration. Do you know the minimum age to vote?");
            } else {
                freeInput.style.display = 'flex';
                guidedControls.style.display = 'none';
                document.getElementById('chat-messages').innerHTML = '';
                addBotMsg("Hello! Ask me anything about the Indian election process.");
            }
        });
    });

    const sendBtn = document.getElementById('chat-send');
    const input = document.getElementById('chat-input');

    sendBtn.addEventListener('click', handleFreeChat);
    input.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleFreeChat(); });

    async function handleFreeChat() {
        const text = input.value.trim();
        if (!text) return;
        addUserMsg(text);
        input.value = '';
        
        // Temporary loading indicator
        const msgs = document.getElementById('chat-messages');
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'msg bot loading';
        loadingDiv.textContent = 'Thinking...';
        msgs.appendChild(loadingDiv);
        msgs.scrollTop = msgs.scrollHeight;

        try {
            // Google Gemini API Integration
            const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY"; // Replace with real key
            const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
            
            // If API key is not set, force fallback
            if (GEMINI_API_KEY === "YOUR_GEMINI_API_KEY") throw new Error("API Key not provided");

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: "You are an expert on the Indian Election Process. Keep your answer under 3 sentences and simple to understand. Answer the user: " + text }]
                    }]
                })
            });

            if (!response.ok) throw new Error("API Error");

            const data = await response.json();
            const botReply = data.candidates[0].content.parts[0].text;
            
            msgs.removeChild(loadingDiv);
            addBotMsg(botReply);

        } catch (error) {
            // Fallback Mock Logic
            msgs.removeChild(loadingDiv);
            setTimeout(() => {
                const lower = text.toLowerCase();
                if (lower.includes('nota')) addBotMsg("NOTA stands for 'None Of The Above'. It allows you to express your disapproval of all candidates on the ballot.");
                else if (lower.includes('vote') || lower.includes('register')) addBotMsg("You must be 18 years old and an Indian citizen to vote. You need to fill Form 6 to get on the voter list.");
                else addBotMsg("That's an interesting question! In the Indian Election system, every process is designed to ensure a free and fair democratic outcome. (Provide a Gemini API key in app.js for real answers!)");
            }, 500);
        }
    }

    document.getElementById('guided-next').addEventListener('click', () => {
        addUserMsg("I'm ready. Next step!");
        guidedStep++;
        setTimeout(() => {
            if (guidedStep === 1) addBotMsg("Great! Next is Nomination. Candidates file their papers to contest. We check their affidavits for transparency.");
            else if (guidedStep === 2) addBotMsg("Then comes Campaigning! Parties hold rallies and distribute manifestos. They must follow the Model Code of Conduct.");
            else if (guidedStep === 3) addBotMsg("Polling Day! You go to the booth, press the EVM button, and check the VVPAT slip.");
            else if (guidedStep === 4) addBotMsg("Counting & Results! EVMs are opened, votes are tallied, and the winner is declared.");
            else addBotMsg("That's the entire process! You can switch back to Free Chat if you have specific questions.");
        }, 500);
    });

    function addBotMsg(text) {
        const msgs = document.getElementById('chat-messages');
        const div = document.createElement('div');
        div.className = 'msg bot';
        div.textContent = text;
        msgs.appendChild(div);
        msgs.scrollTop = msgs.scrollHeight;
    }

    function addUserMsg(text) {
        const msgs = document.getElementById('chat-messages');
        const div = document.createElement('div');
        div.className = 'msg user';
        div.textContent = text;
        msgs.appendChild(div);
        msgs.scrollTop = msgs.scrollHeight;
    }
}
