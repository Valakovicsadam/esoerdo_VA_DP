<script setup>
import { ref } from "vue";
import { quizQuestions } from "../data/Quiz_questions.js";

const actual = ref(0);
const correct = ref(0);

const next = () => {
    actual.value++;
    resetAnswers();
}

const resetAnswers = () => {
    var radios = document.querySelector(".form-check-input:checked");
    radios.checked = false;
}

const checkAnswer = (index) => {
    if (index == quizQuestions[actual.value].helyesIndex) {
        correct.value++;
        alert("Good!");
    }
    else {
        alert("Bad!");
    }
    next();
}

const reset = () => {
    actual.value = 0;
    correct.value = 0;
}
</script>

<template>
    <section>
        <div class="container">
            <p class="text-end">
                Correct answers: {{ correct }} / 10
            </p>
        </div>
    </section>
    <section v-if="actual < 10">
        <div class="container">
            <div class="question">
                <h3>{{ quizQuestions[actual].kerdes }}</h3>
                <div class="form-check" v-for="(choice, index) in quizQuestions[actual].valaszok">
                    <input class="form-check-input" type="radio" name="radioDefault" @click="checkAnswer(index)">
                    <label class="form-check-label" for="radioDefault1">
                        {{ choice }}
                    </label>
                </div>
            </div>
            <div class="mt-4">
                <button type="button" class="btn btn-success" @click="next()">Next</button>
            </div>
        </div>
    </section>
    <section v-else>
        <div class="container">
            <p>Vége!</p>
            <div class="mt-4">
                <button type="button" class="btn btn-warning" @click="reset()">Reset</button>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    padding: 30px;
}
</style>