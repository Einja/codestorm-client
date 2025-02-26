import db from "@/index";

/* Problem struct
    id: string,
    constraints: string,
    description: string,
    difficulty: number,
    examples: Map[string, string],
    inputs: Array[string],
    memoryLimit: string,
    name: string,
    output: string,
    runtimeLimit: string,
    tags: Array[string],
*/

class Problem {
    constructor(id, constraints, description, difficulty, examples, inputs, memoryLimit, name, output, runtimeLimit, tags) {
        this.id = id;
        this.constraints = constraints;
        this.description = description;
        this.difficulty = difficulty;
        this.examples = examples;
        this.inputs = inputs;
        this.memoryLimit = memoryLimit;
        this.name = name;
        this.output = output;
        this.runtimeLimit = runtimeLimit;
        this.tags = tags;
    }
}

// input: problem (Problem)
// output: none
// purpose: adds a problem doc to the problems collection in the database
async function addProblem(problem) {
    try {
        const p = await db.collection('problems').add({
            id: problem.id,
            constraints: problem.constraints,
            description: problem.description,
            difficulty: problem.difficulty,
            examples: problem.examples,
            inputs: problem.inputs,
            memoryLimit: problem.memoryLimit,
            name: problem.name,
            output: problem.output,
            runtimeLimit: problem.runtimeLimit,
            tags: problem.tags
        });
        console.log('Problem added with ID: ', p.id);
    } catch (error) {
        console.error('Error adding problem: ', error);
    }
}

if (require.main === module) {
    const problem = new Problem(
        '1T',
        'Constraints example',
        'Description example',
        2000,
        { 'example1': 'Example 1 description' },
        ['input1:type1','input2:type2'],
        'O(n)',
        'TEST PROBLEM',
        'Output example',
        'O(n)',
        ['tag1', 'tag2']
    );
    
    addProblem(problem);
  }