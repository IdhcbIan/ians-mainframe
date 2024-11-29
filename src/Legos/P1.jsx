import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LangButton from './LangButton';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import NNImage from '../assets/Images/NN_image.png';

const ProjectWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: #1a1a1a;
  color: #f0f0f0;
`;

const ProjectContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #f0f0f0;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    text-decoration: underline;
  }
  &::before {
    content: '← ';
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #f0f0f0;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  color: #f0f0f0;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #f0f0f0;
  margin-bottom: 1rem;
  text-align: justify;
`;

const CodeBlock = styled(SyntaxHighlighter)`
  font-size: 0.9rem !important;
  margin-bottom: 1rem !important;
  text-align: left !important;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin: 1rem auto;
  display: block;
`;

const LanguageButtonContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const ExternalLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Project1 = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'pt' : 'en');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    en: {
      title: "AI for X-ray Diffraction Analysis",
      introduction: "X-ray diffraction (XRD) is a versatile analytical technique with wide-ranging applications across scientific and industrial fields. It's crucial for identifying crystal structures, phases, and orientations in materials science, analyzing drug formulations in pharmaceuticals, determining mineral compositions in geology, and studying alloy structures in metallurgy.",
      howItWorks: "How XRD Works",
      howItWorksText: "XRD works by directing a beam of X-rays onto a sample material. When these X-rays interact with the atoms in the sample, they scatter in specific patterns. These patterns are unique to each material, similar to a fingerprint. By analyzing these patterns, researchers can determine the atomic arrangement, composition, and purity of the material without damaging it.",
      xrdPlot: "XRD Plot",
      xrdPlotText: "A typical XRD plot, or diffractogram, shows the relationship between diffraction angles (2θ) and the intensity of diffracted X-rays. The x-axis represents the diffraction angle, while the y-axis shows the intensity of diffracted X-rays at each angle.",
      aiApplication: "AI Application in XRD Analysis",
      aiApplicationText: "Traditionally, XRD sample classification was done manually using large catalogs, which was a slow process. While this method has been automated, it remains deterministic. By using AI, we can train neural networks to classify molecules more efficiently and expand the analysis to more subjective aspects of the process.",
      aiAdvantages: "Advantages of AI in XRD Analysis",
      aiAdvantagesText: "AI creates a mathematical object capable of classifying samples, encapsulando grandes bancos de dados em um objeto relativamente pequeno e portátil. Enquanto a classificação simples de moléculas foi largamente resolvida por buscas determinísticas em bancos de dados, a IA se destaca em análises mais intrincadas que requerem reconhecimento de padrões baseado em intuição e experiência.",
      conclusion: "Future of the Project",
      conclusionText: "In this project, we demonstrated the initial applicability of AI systems in identifying patterns in XRD data for molecule classification. This approach shows promise for solving more complex problems in XRD analysis that rely on pattern recognition and intuition.",
      codeSnippet: "Example of XRD data processing in our AI model:",
      imagePlaceholder: "XRD Pattern Analysis Model Diagram",
      modelObservation: "Seeing this we can observe that when doing inference on the new trained model we will get a probability distribution over all possible molecules the network has seen. Here is an example:",
      modelExample: `Predicted label: Albite
Expected label: Albite
Probability: 1.0000`,
      modelExplanation: "The high number of neurons and examples, compared to the only 28 molecules it can identify, make it easy for the model to achieve high accuracy. When expanding the Network now to all the RRUFF database, we have a much more challenging task and we are forced to increase our number of neurons.",
      fullDatabaseNote: "For the Neural network of the full https://rruff.info/ database see Jupyter Notebook",
      notebookLink: "https://colab.research.google.com/drive/1yVILC02rYVV82kbUbXmavY3XVgKarxvz?usp=sharing",
      changeLanguage: "Change language:"
    },
    pt: {
      title: "IA para Análise de Difração de Raios X",
      introduction: "A difração de raios X (DRX) é uma técnica analítica versátil com amplas aplicações em campos científicos e industriais. É crucial para identificar estruturas cristalinas, fases e orientações em ciência dos materiais, analisar formulações de medicamentos na indústria farmacêutica, determinar composições minerais em geologia e estudar estruturas de ligas na metalurgia.",
      howItWorks: "Como funciona a DRX",
      howItWorksText: "A DRX funciona direcionando um feixe de raios X para uma amostra de material. Quando esses raios X interagem com os átomos na amostra, eles se dispersam em padrões específicos. Esses padrões são únicos para cada material, semelhantes a uma impressão digital. Ao analisar esses padrões, os pesquisadores podem determinar o arranjo atômico, a composição e a pureza do material sem danificá-lo.",
      xrdPlot: "Gráfico de DRX",
      xrdPlotText: "Um gráfico típico de DRX, ou difratograma, mostra a relação entre os ângulos de difração (2θ) e a intensidade dos raios X difratados. O eixo x representa o ângulo de difração, enquanto o eixo y mostra a intensidade dos raios X difratados em cada ângulo.",
      aiApplication: "Aplicação de IA na Análise de DRX",
      aiApplicationText: "Tradicionalmente, a classificação de amostras por DRX era feita manualmente usando grandes catálogos, o que era um processo lento. Embora esse método tenha sido automatizado, ele permanece determinístico. Usando IA, podemos treinar redes neurais para classificar moléculas de forma mais eficiente e expandir a análise para aspectos mais subjetivos do processo.",
      aiAdvantages: "Vantagens da IA na Análise de DRX",
      aiAdvantagesText: "A IA cria um objeto matemático capaz de classificar amostras, encapsulando grandes bancos de dados em um objeto relativamente pequeno e portátil. Enquanto a classificação simples de moléculas foi largamente resolvida por buscas determinísticas em bancos de dados, a IA se destaca em análises mais intrincadas que requerem reconhecimento de padrões baseado em intuição e experiência.",
      conclusion: "Futuro do Projeto",
      conclusionText: "Neste projeto, demonstramos a aplicabilidade inicial dos sistemas de IA na identificação de padrões em dados de DRX para classificação de moléculas. Essa abordagem mostra promessa para resolver problemas mais complexos na análise de DRX que dependem de reconhecimento de padrões e intuição.",
      codeSnippet: "Exemplo de processamento de dados de DRX em nosso modelo de IA:",
      imagePlaceholder: "Diagrama do Modelo de Análise de Padrões de DRX",
      modelObservation: "Observando isso, podemos ver que ao fazer inferência no novo modelo treinado, obteremos uma distribuição de probabilidade sobre todas as moléculas possíveis que a rede viu. Aqui está um exemplo:",
      modelExample: `Rótulo previsto: Albita
Rótulo esperado: Albita
Probabilidade: 1.0000`,
      modelExplanation: "O alto número de neurônios e exemplos, comparado às apenas 28 moléculas que pode identificar, torna fácil para o modelo alcançar alta precisão. Ao expandir a Rede agora para todo o banco de dados RRUFF, temos uma tarefa muito mais desafiadora e somos forçados a aumentar nosso número de neurônios.",
      fullDatabaseNote: "Para a Rede Neural do banco de dados completo https://rruff.info/, veja o Jupyter Notebook",
      notebookLink: "https://colab.research.google.com/drive/1yVILC02rYVV82kbUbXmavY3XVgKarxvz?usp=sharing",
      changeLanguage: "Mudar idioma:"
    }
  };

  return (
    <ProjectWrapper>
      <ProjectContainer>
        <BackButton to="/">Back</BackButton>
        <LanguageButtonContainer>
          <span>{content[language].changeLanguage}</span>
          <LangButton onLanguageChange={handleLanguageChange} />
        </LanguageButtonContainer>
        <Title>{content[language].title}</Title>
        <Paragraph>{content[language].introduction}</Paragraph>
        <Subtitle>{content[language].howItWorks}</Subtitle>
        <Paragraph>{content[language].howItWorksText}</Paragraph>
        <Subtitle>{content[language].xrdPlot}</Subtitle>
        <Paragraph>{content[language].xrdPlotText}</Paragraph>
        <Subtitle>{content[language].aiApplication}</Subtitle>
        <Paragraph>{content[language].aiApplicationText}</Paragraph>
        <Subtitle>{content[language].aiAdvantages}</Subtitle>
        <Paragraph>{content[language].aiAdvantagesText}</Paragraph>
        <Subtitle>{content[language].conclusion}</Subtitle>
        <Paragraph>{content[language].conclusionText}</Paragraph>
        <Subtitle>{content[language].codeSnippet}</Subtitle>
        <CodeBlock language="python" style={dracula}>
{`import torch
import torch.nn.functional as F
import numpy as np
from scipy.signal import find_peaks

# Load and preprocess XRD data
def get_data(file_path):
    # Read data from file and extract x, y values
    # ...

# Create noisy data for data augmentation
def create_noise(file_path, n=5, intensity_noise=0.04, peak_shift=1, peak_threshold=0.5):
    # Generate noisy versions of the original data
    # ...

# Prepare data and labels
data_tensor, labels = process_all_files_in_directory(n=5)
train_data, test_data, train_labels, test_labels = train_test_split(data_tensor, labels)

# Prepare labels for cross-entropy loss
one_hot_labels, label_indices, label_to_index = prepare_labels_for_cross_entropy(train_labels, train_labels)

# Define neural network architecture
W1 = torch.randn((8501, 800))
b1 = torch.randn(800)
W2 = torch.randn((800, 28))
b2 = torch.randn(28)
parameters = [W1, b1, W2, b2]

# Train the model
for epoch in range(1000):
    # Forward pass
    h = torch.tanh(train_data @ W1 + b1)
    logits = h @ W2 + b2
    probabilities = F.softmax(logits, dim=1)
    
    # Calculate loss
    criterion = torch.nn.CrossEntropyLoss()
    loss = criterion(logits, label_indices)
    
    print(f"Epoch {epoch}, Loss: {loss.item():.4f}")
    
    if loss < 1e-3:
        print("Reached stop point!")
        break
    
    # Backward pass and update parameters
    loss.backward()
    for p in parameters:
        p.data += -0.1 * p.grad

# Test the model
def test_example(i):
    h = torch.tanh(test_data[i] @ W1 + b1)
    logits = h @ W2 + b2
    probabilities = F.softmax(logits, dim=0)
    max_prob_index = torch.argmax(probabilities).item()
    predicted_label = index_to_label[max_prob_index]
    
    print(f"Predicted label: {predicted_label}")
    print(f"Expected label: {test_labels[i]}")
    print(f"Probability: {probabilities[max_prob_index].item():.4f}")

# Test an example
test_example(50)`}
        </CodeBlock>
        <Paragraph>{content[language].modelObservation}</Paragraph>
        <CodeBlock language="text" style={dracula}>
          {content[language].modelExample}
        </CodeBlock>
        <Paragraph>{content[language].modelExplanation}</Paragraph>
        <Image src={NNImage} alt={content[language].imagePlaceholder} />
        <Paragraph>
          {content[language].fullDatabaseNote}{' '}
          <ExternalLink href={content[language].notebookLink} target="_blank" rel="noopener noreferrer">
            {content[language].notebookLink}
          </ExternalLink>
        </Paragraph>
      </ProjectContainer>
    </ProjectWrapper>
  );
};

export default Project1;
