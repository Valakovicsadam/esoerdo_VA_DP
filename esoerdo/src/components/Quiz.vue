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
        alert("Correct answer!");
    }
    else {
        alert("Wrong answer!");
    }
    next();
}

const reset = () => {
    actual.value = 0;
    correct.value = 0;
}
</script>

<template>
  <div class="quiz-shell">
    <main class="quiz-area container">
      <div class="quiz-header mb-3">
        <div class="row align-items-center gx-3 gy-2">
          <div class="col-12 col-md-6">
            <div class="branding">
              <h1 class="page-title mb-1">Quiz</h1>
              <p class="subtle mb-0">Test your rainforest knowledge — join us!</p>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="d-flex flex-row flex-sm-row align-items-start align-items-sm-center justify-content-sm-end gap-2">
              <div class="meta-row text-start text-sm-end">
                <div class="qcount d-inline-block me-2">Question: <strong>{{ Math.min(actual+1, quizQuestions.length) }}</strong> / {{ quizQuestions.length }}</div>
                <div class="score d-inline-block">Correct answers: <strong>{{ correct }}</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section v-if="actual < quizQuestions.length" class="question-wrap">
        <article class="card glass">
          <div class="card-inner">
            <h2 class="question-title">{{ quizQuestions[actual].kerdes }}</h2>

            <div class="choices">
              <label
                v-for="(choice, index) in quizQuestions[actual].valaszok"
                :key="index"
                class="choice"
              >
                <input
                  class="form-check-input real-radio"
                  type="radio"
                  :name="'q' + actual"
                  :value="index"
                  @click="checkAnswer(index)"
                />
                <div class="choice-body">
                  <span class="letter">{{ String.fromCharCode(65 + index) }}</span>
                  <span class="text">{{ choice }}</span>
                </div>
              </label>
            </div>

            <div class="actions">
              <button class="btn ghost" @click="reset()">Restart</button>
              <div class="right-actions">
                <button class="btn clear" @click="resetAnswers()">Clear</button>
                <button class="btn next" @click="next()">Next</button>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section v-else class="end-wrap">
        <article class="card glass end-card">
          <div class="card-inner center">
            <h2>Nicely done!</h2>
            <p class="result">Your score: <strong>{{ correct }} / {{ quizQuestions.length }}</strong></p>
            <div class="end-actions">
              <button class="btn primary large" @click="reset">Try again</button>
            </div>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<style scoped>
.quiz-shell {
  background: linear-gradient(180deg, #f7faf7 0%, #eef2ee 60%);
  min-height: 70vh; 
  padding: 140px 0;
}

.quiz-area {
  max-width: 980px;
  margin: 0 auto;
  padding: 0 18px;
}

.quiz-header {
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.branding .page-title {
  margin: 0;
  font-size: 1.6rem;
  letter-spacing: -0.5px;
  color: #123524;
  font-weight: 800;
}

.branding .subtle {
  margin: 4px 0 0;
  font-size: 0.9rem;
  color: #59655a;
}

.qcount, .score {
  background: rgba(47,143,107,0.06);
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: 700;
  color: #1f4f3a;
}

.card.glass {
  background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(250,250,250,0.85));
  border-radius: 14px;
  padding: 18px;
  box-shadow: 0 18px 40px rgba(17, 31, 22, 0.06);
  border: 1px solid rgba(24, 50, 36, 0.04);
  overflow: hidden;
}

.card-inner {
  padding: 18px;
}

.question-title {
  font-size: 1.35rem;
  margin: 6px 0 14px;
  color: #123524;
  font-weight: 700;
}

.choices {
  display: grid;
  gap: 10px;
}

.choice {
  display: block;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.real-radio {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.choice-body {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px 14px;
  background: linear-gradient(180deg, #ffffff, #fbfdfb);
  border: 1px solid rgba(0,0,0,0.04);
  border-radius: 10px;
  transition: background 160ms ease, transform 120ms ease;
}

.letter {
  min-width: 42px;
  min-height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: #2f8f6b;
  background: #fff;
  border-radius: 999px;
  box-shadow: 0 8px 20px rgba(47,143,107,0.06);
  border: 2px solid rgba(47,143,107,0.08);
}

.text {
  color: #26332b;
  font-weight: 700;
}

.choice:hover .choice-body {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(22, 55, 32, 0.06);
}


.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
  gap: 12px;
}

.right-actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  transition: transform 140ms ease, box-shadow 140ms ease;
}

.btn.clear {
  background: transparent;
  border: 1px dashed rgba(0,0,0,0.06);
  color: #46594f;
}

.btn.next {
  background: linear-gradient(90deg, #2f8f6b, #1f6b4f);
  color: #fff;
  padding: 10px 16px;
  border-radius: 10px;
}

.btn.primary {
  background: linear-gradient(90deg,#2f8f6b,#1f6b4f);
  color: #fff;
}

.btn.large {
  padding: 12px 18px;
  font-size: 1rem;
}

.result {
  color: #2f6a4f;
  font-weight: 700;
  margin-bottom: 14px;
}

</style>
