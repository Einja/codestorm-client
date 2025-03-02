const url = "https://judge0-ce.p.rapidapi.com/submissions?wait=true";
const apiKey = process.env.JUDGE0_API_KEY;

/*
C++ -> language_id = 76
Python3 -> language_id = 92
*/

const languageToId = {
    "cpp": 76,
    "python": 92
};

const handleSubmission = async (code, language) => {
    const judgeCode = `
    #include <bits/stdc++.h>
    using namespace std;
    
    ${code}

    int main() {
        Solution sol;
        return 0;
    }`

    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
    
        body: JSON.stringify({
            language_id: languageToId[language],
            source_code: judgeCode,
            cpu_time_limit: 2,
            memory_limit: 128000,
        })
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}


export { handleSubmission };