// callAI stub — returns a scripted reply so the chat flow works now.
// Replace this entire function in Lesson 5 with the real Groq API call.
const callAI = useCallback(async (userMessage) => {
    // Simulate a short network delay so the typing dots appear
    await new Promise(r => setTimeout(r, 600));
    if (userMessage.toLowerCase().includes('name'))
        return "Great to meet you! How are you feeling today?";
    if (userMessage.toLowerCase().includes('feeling') || userMessage.toLowerCase().includes('mood'))
        return "Sounds good! Let's find the perfect movie for you.";
    return "Here are some great movies I think you'll enjoy!";
}, []);

// callAIWithSearch stub — returns a reply with no movie results yet.
// Movie posters are added in Lesson 4 when OMDb is connected.
const callAIWithSearch = useCallback(async (userMessage) => {
    const reply = await callAI(userMessage);
    return { reply, movieResults: [], hasAgeSwitchOffer: false };
}, [callAI]);

// searchForStrip stub — returns empty array until Lesson 4 (OMDb API).
const searchForStrip = useCallback(async () => [], []);

// switchAge — change age mode mid-chat
const switchAge = useCallback((newAge) => {
    setUserAge(newAge);
    userAgeRef.current = newAge;
    addMsg('bot', `Switched to ${{ [AGE.KIDS]: 'Kids mode', [AGE.TEEN]: 'Teen mode', [AGE.ADULT]: 'Adult mode' }[newAge]}!`);
}, [addMsg]);

// isRestricted stub — always returns false until Lesson 5 adds the filter
const isRestricted = useCallback(() => false, []);

// ─────────────────────────── LESSON 3 END ────────────────────────────────


const value = {
    // Lesson 2
    theme, setTheme,
    userName, setUserName, userAge, setUserAge,
    userMood, setUserMood, userCategories, setUserCategories,
    userLanguage, setUserLanguage,
    stage, setStage, chatMsgs, setChatMsgs, addMsg,
    isBotTyping, setIsBotTyping, resetChat,
    // Lesson 3
    callAI, callAIWithSearch, searchForStrip, switchAge, isRestricted,
};

return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
    const ctx = useContext(AppContext);
    if (!ctx) throw new Error('useApp must be inside <AppProvider>');
    return ctx;
}