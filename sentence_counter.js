function sentence_counter(sentence) {
    let num_char = 0;
    let num_vowel = 0;
    let num_word = 0;

    // creates variable of vowels characters.
    const vowel = 'aeiou'

    // Convert sentence to lower case.
    sentence = sentence.toLowerCase()

    // loop through the sentence.
    for (c of sentence) {
        // Increase num_char through looping
        num_char += 1;

        // Check if is a vowel and increase num_vowel.
        if (vowel.includes(c)) {
            num_vowel += 1;
        };

        // Check if character if is space or point, and increase num_word.
        if (c === " " || c === '.') {
            num_word += 1;
        }
    };

    console.log('Words: ', num_word)
    console.log('Vowels: ', num_vowel)
    console.log('Characters: ', num_char)
}

sentence_counter('This is a sentence.')
sentence_counter('Another one, this is a sentence.')
