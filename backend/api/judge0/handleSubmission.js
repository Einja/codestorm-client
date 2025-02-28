const url = "https://judge0-ce.p.rapidapi.com/submissions?wait=true";
const apiKey = process.env.NEXT_PUBLIC_JUDGE0_API_KEY;

/*
C++ -> language_id = 76
Python3 -> language_id = 92
*/
const handleSubmission = async (code) => {
    const judgeCode = `
    #include <bits/stdc++.h>
    using namespace std;
    
    ${code}

    int main() {
        Solution sol;
        cout << sol.solution(9) << endl;
        cout << sol.solution(8) << endl;
        cout << sol.solution(7) << endl;
        cout << sol.solution(6) << endl;
        cout << sol.solution(5) << endl;
        cout << sol.solution(4) << endl;
        cout << sol.solution(3) << endl;
        cout << sol.solution(2) << endl;
        cout << sol.solution(1) << endl;
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
            language_id: 76,
            source_code: judgeCode
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