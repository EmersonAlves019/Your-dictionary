interface IWordInfos {
  word: string;
  audio: string;
  definition: string | null;
  example: string | null;
  synonyms: string[] | null;
  images: string[] | null;
  phonetic: string | null;
}

interface IPhonetics {
  text: string | null;
  audio: string | null;
}

interface IDefinitions {
  definition: string | null;
  example: string | null;
  antonyms: string | null;
  synonyms: string | null;
}
export default function composeWordInfos(wordInfos: any) {
  const result = <IWordInfos>{};

  result.word = wordInfos[0]?.word || '';

  if (result.word) {
    result.audio = wordInfos[0]?.phonetics?.find(({ audio }: IPhonetics) => {
      return audio;
    })?.audio;

    result.definition = wordInfos[0]?.meanings[0]?.definitions?.find(
      ({ definition }: IDefinitions) => {
        return definition;
      },
    )?.definition;

    result.example = wordInfos[0]?.meanings[0]?.definitions?.find(
      ({ example }: IDefinitions) => {
        return example;
      },
    )?.example;

    result.synonyms = wordInfos[0]?.meanings[0]?.definitions?.find(
      ({ synonyms }: IDefinitions) => {
        return synonyms;
      },
    )?.synonyms;
  }

  result.phonetic = wordInfos[0]?.phonetics
    ?.find(({ text }: IPhonetics) => {
      return text;
    })
    ?.text?.replace(/\//g, '');

  return result.word === '' ? wordInfos : result;
}
