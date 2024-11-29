import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LangButton from './LangButton';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import IRSpectrum from './Images/spec.png';
import NNClassification from './Images/NN2.png';
import OrganicFunctionClassification from './Images/N2.png';


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

const Project2 = () => {
  const [language, setLanguage] = useState('pt');

  const handleLanguageChange = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'pt' : 'en');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    pt: {
      title: "Redes Neurais para Espectroscopia IR",
      author: "Ian Bezerra",
      date: "Outubro 2024",
      abstract: "Usando redes Neurais para classificar funções orgânicas presentes em um espectro de IR.",
      introduction: {
        title: "Introdução",
        text: [
          "Atuais métodos de análise de espectros de IR (infravermelho) envolvem técnicas manuais e computacionais. Tradicionalmente, químicos experientes interpretam visualmente os picos e padrões do espectro, comparando-os com tabelas de referência e bibliotecas espectrais. Softwares especializados auxiliam nessa análise, oferecendo recursos de comparação automática com bancos de dados e identificação de grupos funcionais. No entanto, esses métodos podem ser demorados e sujeitos a erros humanos, especialmente para moléculas complexas ou misturas.",
          "Redes neurais apresentam uma quebra de paradigma na forma que conhecemos e estudamos os padrões emergentes da natureza, pela grande maioria da história essa tarefa foi feita por mentes humanas que analisavam e modelavam tais padrões e criavam modelos e métodos determinísticos para detecção desses padrões. No entanto com o avanço de redes neurais e da computação em paralelo podemos extrair estes padrões emergentes diretamente de grandes quantidades de dados, e de certa forma \"cristaliza-los\" em arquiteturas de redes neurais, as quais podem ser utilizadas para generalizar estes padrões em dados não vistos previamente.",
          "Inicialmente testamos o uso de redes neurais no reconhecimento de moléculas inorgânicas usando ondas de Raio-x(XRD) para classificação de moléculas, no entanto a simplicidade do problema, devido a natureza das moléculas inorgânicas mostrou que este problema já tinha sido mapeado de forma algorítmica, onde se pode simplesmente buscar um grande dicionário, achando o pico de maior intensidade e em seguida o segundo e assim em diante.",
          "Com isso em mente partimos em busca de um problema mais complexo, um que requer uma certa intuição, experiência do observador. De certa forma buscamos usar a propriedade de emergência de solução desses sistemas de aprendizado de máquina para achar os padrões, dificilmente explicáveis, que criam este senso de intuição.",
          "O problema escolhido foi a identificação de funções orgânicas, a partir de espectros de Infravermelho, adiante sera dito como isso difere do problema de classificação de moléculas.",
          "Espectroscopia de infravermelho é uma técnica analítica versátil na química orgânica e outras ciências. Utiliza ondas eletromagnéticas infravermelhas para interagir com ligações químicas em moléculas. A absorção de energia em frequências específicas cria um espectro único, funcionando como \"impressão digital\" molecular. Permite identificar grupos funcionais, determinar estruturas e analisar composições. É não destrutiva, aplicável a diversos estados da matéria, sendo essencial em pesquisa e indústria.",
          "Em uma implementação de classificação usamos o espectro como input e usamos uma rede neural para gerar um output na ultima camada uma distribuição de probabilidade em cima de um dicionário de moléculas conhecidas. Assim, assumimos que a molécula com maior probabilidade é a escolha da rede neural, também é importante criar um threshold onde se à maior probabilidade for menor que este threshold, então dizemos que a rede neural \"não tem certeza\". Isso pode acontecer quando colocamos como input uma molécula que não estava nos dados usados para treinar e dessa forma a rede neural não aprendeu a classificá-la."
        ]
      },
      classification: {
        title: "Classificação de funções orgânicas em espectros de IR",
        text: [
          "Quando fazemos a classificação da molécula, observamos o espectro como sua impressão digital, achando similaridades entre o espectro de input e as digitais únicas das moléculas aprendidas, onde a rede neural aprende padrões únicos de cada molécula e ativa neurônios quando identifica cada padrão, subindo assim a ativação do neurônio final que representa a probabilidade da amostra ser a respectiva molécula deste índice no dicionário.",
          "Diferentemente do problema de classificação de moléculas, a classificação de funções orgânicas dentro do espectro do IR não busca aprender a impressão digital de cada molécula, mas sim os padrões criados pela presença de uma função orgânica específica dentro de um espectro de IR. Desta forma, seria possível fornecer o input de um espectro de IR de uma molécula nunca antes vista pela rede neural, e reconhecer os padrões das funções orgânicas conhecidas presentes na molécula.",
          "No problema de classificação de moléculas recebemos o espectro como input e criamos uma distribuição de probabilidades de ser cada molécula, que pode ser somado para 1, pois a amostra apenas pode ser uma molécula do dicionário. No entanto uma molécula pode conter mais de uma função orgânica, assim na classificação de funções orgânicas o output final não soma para 1, mas sim cada neurônio na camada final representa uma independente de 0 a 1 desta função orgânica está presente na molécula."
        ]
      },
      data: {
        title: "Data",
        text: "..."
      },
      implementation: {
        title: "Implementation",
        text: "..."
      },
      conclusion: {
        title: "Conclusion",
        text: "..."
      },
      changeLanguage: "Change language:"
    },
    en: {
      title: "Neural Networks for IR Spectroscopy",
      author: "Ian Bezerra",
      date: "October 2024",
      abstract: "Using Neural Networks to classify organic functions present in an IR spectrum.",
      introduction: {
        title: "Introduction",
        text: [
          "Current methods of analyzing IR (infrared) spectra involve manual and computational techniques. Traditionally, experienced chemists visually interpret the peaks and patterns of the spectrum, comparing them with reference tables and spectral libraries. Specialized software assists in this analysis, offering automatic comparison features with databases and identification of functional groups. However, these methods can be time-consuming and subject to human error, especially for complex molecules or mixtures.",
          "Neural networks present a paradigm shift in the way we know and study emerging patterns in nature. For most of history, this task was done by human minds that analyzed and modeled such patterns and created deterministic models and methods for detecting these patterns. However, with the advancement of neural networks and parallel computing, we can extract these emerging patterns directly from large amounts of data, and in a way \"crystallize\" them in neural network architectures, which can be used to generalize these patterns in previously unseen data.",
          "Initially, we tested the use of neural networks in the recognition of inorganic molecules using X-ray waves (XRD) for molecule classification. However, the simplicity of the problem, due to the nature of inorganic molecules, showed that this problem had already been mapped algorithmically, where one can simply search a large dictionary, finding the peak of highest intensity and then the second and so on.",
          "With this in mind, we set out in search of a more complex problem, one that requires a certain intuition, experience of the observer. In a way, we seek to use the solution emergence property of these machine learning systems to find the patterns, difficult to explain, that create this sense of intuition.",
          "The chosen problem was the identification of organic functions from Infrared spectra, and it will be explained later how this differs from the problem of molecule classification.",
          "Infrared spectroscopy is a versatile analytical technique in organic chemistry and other sciences. It uses infrared electromagnetic waves to interact with chemical bonds in molecules. The absorption of energy at specific frequencies creates a unique spectrum, functioning as a molecular \"fingerprint\". It allows the identification of functional groups, determination of structures, and analysis of compositions. It is non-destructive, applicable to various states of matter, being essential in research and industry.",
          "In a classification implementation, we use the spectrum as input and use a neural network to generate an output in the last layer a probability distribution over a dictionary of known molecules. Thus, we assume that the molecule with the highest probability is the neural network's choice, it is also important to create a threshold where if the highest probability is less than this threshold, then we say that the neural network \"is not sure\". This can happen when we input a molecule that was not in the data used for training and thus the neural network did not learn to classify it."
        ]
      },
      classification: {
        title: "Classification of organic functions in IR spectra",
        text: [
          "When we classify the molecule, we observe the spectrum as its fingerprint, finding similarities between the input spectrum and the unique fingerprints of the learned molecules, where the neural network learns unique patterns of each molecule and activates neurons when it identifies each pattern, thus increasing the activation of the final neuron that represents the probability of the sample being the respective molecule of this index in the dictionary.",
          "Unlike the problem of molecule classification, the classification of organic functions within the IR spectrum does not seek to learn the fingerprint of each molecule, but rather the patterns created by the presence of a specific organic function within an IR spectrum. In this way, it would be possible to provide the input of an IR spectrum of a molecule never before seen by the neural network, and recognize the patterns of known organic functions present in the molecule.",
          "In the molecule classification problem, we receive the spectrum as input and create a probability distribution of being each molecule, which can be summed to 1, as the sample can only be one molecule from the dictionary. However, a molecule can contain more than one organic function, so in the classification of organic functions, the final output does not sum to 1, but rather each neuron in the final layer represents an independent 0 to 1 of this organic function being present in the molecule."
        ]
      },
      changeLanguage: "Change language:"
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
        <Paragraph>{content[language].author}</Paragraph>
        <Paragraph>{content[language].date}</Paragraph>
        <Subtitle>Abstract</Subtitle>
        <Paragraph>{content[language].abstract}</Paragraph>
        <Subtitle>{content[language].introduction.title}</Subtitle>
        {content[language].introduction.text.map((paragraph, index) => (
          <Paragraph key={index}>{paragraph}</Paragraph>
        ))}
        <Image src={IRSpectrum} alt="IR Spectrum" />
        <Image src={NNClassification} alt="Neural Network Classification" />
        <Subtitle>{content[language].classification.title}</Subtitle>
        {content[language].classification.text.map((paragraph, index) => (
          <Paragraph key={index}>{paragraph}</Paragraph>
        ))}
        <Image src={OrganicFunctionClassification} alt="Organic Function Classification" />
        <a href="https://github.com/USPCodeLabSanca/ML_Chem" target="_blank" rel="noopener noreferrer">
          View project on GitHub
        </a>
      </ProjectContainer>
    </ProjectWrapper>
  );
};

export default Project2;
