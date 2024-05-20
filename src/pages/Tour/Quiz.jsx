import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const questionsData = {
  padang: [
    {
      question: 'What is the traditional food of Padang made of rice, meat, and spicy curry sauce?',
      answers: ['Nasi Padang', 'Sate Padang', 'Rendang', 'Pempek'],
      correct: 'Nasi Padang',
    },
    {
      question: 'Which of the following attractions is not located in Padang?',
      answers: ['Pantai Air Manis', 'Pulau Pasumpahan', 'Jam Gadang', 'Pulau Angso Duo'],
      correct: 'Jam Gadang',
    },
    {
      question: 'What is the traditional clothing worn by the Minangkabau people of Padang?',
      answers: ['Baju Kurung', 'Tengkuluk', 'Baju Kuruang', 'Sampin'],
      correct: 'Baju Kuruang',
    },
    {
      question: 'Which dish is a famous Padang-style beef stew, cooked slowly in coconut milk and spices?',
      answers: ['Sate Padang', 'Dendeng', 'Rendang', 'Sala Lauak'],
      correct: 'Rendang',
    },
    {
      question: 'Which beach is known for its picturesque sunset and natural beauty, located near Padang?',
      answers: ['Pantai Air Manis', 'Pantai Gandoriah', 'Pulau Pasumpahan', 'Pantai Bungus'],
      correct: 'Pantai Air Manis',
    },
    {
      question: 'What is the traditional headgear worn by men in Padang called?',
      answers: ['Tengkuluk', 'Ikat', 'Sampin', 'Selendang'],
      correct: 'Tengkuluk',
    },
    {
      question: 'Which dish is a popular Padang-style grilled skewered meat dish?',
      answers: ['Sate Padang', 'Dendeng', 'Rendang', 'Sala Lauak'],
      correct: 'Sate Padang',
    },
    {
      question: 'Which island, known for its crystal-clear waters and coral reefs, is a popular destination near Padang?',
      answers: ['Pulau Pasumpahan', 'Pulau Angso Duo', 'Pulau Pagang', 'Pulau Pisang'],
      correct: 'Pulau Pasumpahan',
    },
    {
      question: 'What is the traditional female attire in Padang, usually worn during ceremonies and events?',
      answers: ['Baju Kurung', 'Baju Kuruang', 'Tengkuluk', 'Sampin'],
      correct: 'Baju Kurung',
    },
    {
      question: 'Which dish is a type of Padang-style beef jerky, thinly sliced and marinated with spices?',
      answers: ['Dendeng', 'Sate Padang', 'Rendang', 'Sala Lauak'],
      correct: 'Dendeng',
    },
  ],
  palembang: [
    {
      question: 'What is the traditional food of Palembang made from fish and tapioca?',
      answers: ['Pempek', 'Rendang', 'Nasi Padang', 'Sate Padang'],
      correct: 'Pempek',
    },
    {
      question: 'Which famous landmark is located in Palembang?',
      answers: ['Jembatan Ampera', 'Pantai Air Manis', 'Jam Gadang', 'Pantai Gandoriah'],
      correct: 'Jembatan Ampera',
    },
    {
      question: 'What is the traditional clothing worn by the people of Palembang?',
      answers: ['Limpapeh', 'Baju Kurung', 'Tengkuluk', 'Sampin'],
      correct: 'Limpapeh',
    },
    {
      question: 'Which dish is a popular Palembang-style fish cake served with a spicy vinegar sauce?',
      answers: ['Pempek', 'Gulai Itiak', 'Sala Lauak', 'Sate Padang'],
      correct: 'Pempek',
    },
    {
      question: 'Which river flows through the city of Palembang?',
      answers: ['Musi River', 'Batang Arau River', 'Ciliwung River', 'Kamal River'],
      correct: 'Musi River',
    },
    {
      question: 'What is the name of the traditional Palembang-style house?',
      answers: ['Rumah Limas', 'Rumah Gadang', 'Joglo', 'Rumah Panggung'],
      correct: 'Rumah Limas',
    },
    {
      question: 'Which historical site in Palembang is a remnant of the Sriwijaya Kingdom?',
      answers: ['Sriwijaya Archaeological Park', 'Borobudur Temple', 'Prambanan Temple', 'Tanah Lot'],
      correct: 'Sriwijaya Archaeological Park',
    },
    {
      question: 'Which dish is a Palembang-style fish soup cooked in a spicy coconut milk broth?',
      answers: ['Pindang Patin', 'Sate Padang', 'Rendang', 'Sala Lauak'],
      correct: 'Pindang Patin',
    },
    {
      question: 'What is the traditional Palembang headgear for men called?',
      answers: ['Tanjak', 'Tengkuluk', 'Sampin', 'Selendang'],
      correct: 'Tanjak',
    },
    {
      question: "Which festival in Palembang celebrates the city's anniversary with boat races and cultural events?",
      answers: ['Festival Sriwijaya', 'Jakarta Fair', 'Bali Arts Festival', 'Yogyakarta Art Festival'],
      correct: 'Festival Sriwijaya',
    },
  ],
  lampung: [
    {
      question: 'What is the traditional food of Lampung made from fish and grated coconut?',
      answers: ['Seruit', 'Pempek', 'Rendang', 'Nasi Padang'],
      correct: 'Seruit',
    },
    {
      question: 'Which of the following attractions is located in Lampung?',
      answers: ['Way Kambas National Park', 'Jembatan Ampera', 'Jam Gadang', 'Pantai Air Manis'],
      correct: 'Way Kambas National Park',
    },
    {
      question: 'What is the traditional clothing worn by the people of Lampung?',
      answers: ['Tapis', 'Baju Kurung', 'Limpapeh', 'Sampin'],
      correct: 'Tapis',
    },
    {
      question: 'Which dish is a famous Lampung-style fish dish, served with a spicy tamarind sauce?',
      answers: ['Pindang Patin', 'Gulai Itiak', 'Pempek', 'Sate Padang'],
      correct: 'Pindang Patin',
    },
    {
      question: 'Which beach in Lampung is known for its surfing spots and scenic beauty?',
      answers: ['Pantai Tanjung Setia', 'Pantai Air Manis', 'Pantai Gandoriah', 'Pantai Bungus'],
      correct: 'Pantai Tanjung Setia',
    },
    {
      question: 'What is the traditional headgear worn by men in Lampung called?',
      answers: ['Siger', 'Tanjak', 'Tengkuluk', 'Selendang'],
      correct: 'Siger',
    },
    {
      question: 'Which dish is a popular Lampung-style grilled fish served with a spicy chili sauce?',
      answers: ['Seruit', 'Pempek', 'Rendang', 'Sala Lauak'],
      correct: 'Seruit',
    },
    {
      question: 'Which island, known for its natural beauty and crystal-clear waters, is a popular destination in Lampung?',
      answers: ['Pulau Pahawang', 'Pulau Pasumpahan', 'Pulau Angso Duo', 'Pulau Pagang'],
      correct: 'Pulau Pahawang',
    },
    {
      question: 'What is the traditional female attire in Lampung, usually adorned with intricate gold thread patterns?',
      answers: ['Tapis', 'Baju Kurung', 'Limpapeh', 'Sampin'],
      correct: 'Tapis',
    },
    {
      question: 'Which dish is a type of Lampung-style shrimp crackers, known for its crunchiness?',
      answers: ['Keripik Udang', 'Pempek', 'Rendang', 'Sala Lauak'],
      correct: 'Keripik Udang',
    },
  ],
};

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const { city } = useParams();

  const questions = questionsData[city];

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <div id="quiz-content">
        {!finished ? (
          <div className="bg-slate-200 border-1 border-sky-500 p-4 text-center rounded-xl">
            <h2 className="text-2xl">{questions[currentQuestion].question}</h2>
            {questions[currentQuestion].answers.map((answer, index) => (
              <button key={index} onClick={() => handleAnswer(answer)} className="bg-slate-200 px-4 mx-2 mt-4 border-2 border-sky-500 hover:bg-blue-200 transition">
                {answer}
              </button>
            ))}
          </div>
        ) : (
          <div>
            <h2>Your score: {score}</h2>
            {score > 5 ? (
              <div>
                <p>Congratulations! You've earned Rp50,000.</p>
                <button
                  onClick={() => {
                    setCurrentQuestion(0);
                    setFinished(false);
                    setScore(0);
                  }}
                  className="btn btn-primary"
                >
                  Take Quiz Again
                </button>
              </div>
            ) : (
              <div>
                <p>You need to score more than 5 to pass. Try again.</p>
                <button
                  onClick={() => {
                    setCurrentQuestion(0);
                    setFinished(false);
                    setScore(0);
                  }}
                  className="btn btn-primary"
                >
                  Retry
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
