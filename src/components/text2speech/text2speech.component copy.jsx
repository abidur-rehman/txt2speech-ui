import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { Main, UploadLabel, UploadInput, AreaContainer, Button } from './text2speech.styles';
import SliderComponent from '../slider/slider.component';
import CustomSelect from '../custom-select/custom-select.component';
import { pitchMarks, rateMarks } from '../../util';

const Text2Speech = () => {
  // const [selectedFile, setSelectedFile] = useState(null);
  const [fullDesc, setFullDesc] = useState('');
  const [pitch, setPitch] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('en-GB');
  const [selectedSound, setSelectedSound] = useState('en-GB-Wavenet-B');
  const [selectedSpeakingRate, setSelectedSpeakingRate] = useState(1);
  const langOptions = ['en-GB', 'en-US'];
  const langSoundOptions = [
    {'en-GB': ['en-GB-Standard-F', 'en-GB-Standard-B', 'en-GB-Wavenet-B', 'en-GB-Wavenet-D']}, 
    {'en-US': ['en-US-Standard-G', 'en-US-Standard-B', 'en-US-Wavenet-B', 'en-US-Wavenet-D']}];


  const findObjectByKey = (key, value) => {
    for (let i = 0; i < langSoundOptions.length; i++) {
        let obj = Object.keys(langSoundOptions[i]);
        if (obj.toString() === value) {
          let result = '';
          const values = Object.values(langSoundOptions[i]);
          for (let j = 0, len = values.length; j < len; j++) {
            result = values[j];
        }
          return result;
        }
    }
    return null;
  }

  const soundOptions = findObjectByKey(selectedLanguage, selectedLanguage);

  const getByText = async () => {
    const formData = new FormData();
    formData.append('language', selectedLanguage);
    formData.append('voice', selectedSound);
    formData.append('text', fullDesc);
    formData.append('pitch', pitch);
    formData.append('speakingRate', selectedSpeakingRate);
    try {
      const response = await fetch(`http://localhost:8080/speak`, {
        body: formData,
        method: 'POST'
      });
      const mp3Bytes = await response.arrayBuffer();
      var blob = new Blob([mp3Bytes], {type: "mp3"});
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      var fileName = 'outputfile.mp3';
      link.download = fileName;
      link.click();
    } finally {

    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullDesc.length === 0) {
      console.log(`speech is empty `);
      return false;
    } else {
      console.log(`speech ${fullDesc}`);
      getByText();
    }
  }

  const fileSelected = async (e) => {
    // const { files: data } = e.target;
    // const file = data[0];
    // setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = (e.target.result)
      setFullDesc(text);
    };
    reader.readAsText(e.target.files[0])
  };

  const handleTextChange = e => {
    const { value } = e.target;
    setFullDesc(value);
  };

  return <>
    <Main>
      <Grid container direction="row" justify="center" alignItems="center">
       <Grid item xs={12}><h3>Welcome! Convert your text to voice</h3></Grid>
       <Grid item xs={12}><UploadLabel item htmlFor='front' className='upload'>Upload File</UploadLabel></Grid>
       <Grid item xs={12}><UploadInput id='front' name='front' style={{visibility: 'hidden'}} type='file' onChange={fileSelected}/></Grid>
       <Grid item xs={12}><AreaContainer onChange={handleTextChange} minlength='10' maxlength='2000' value={fullDesc}/></Grid>
       <Grid item xs={12}>
        <CustomSelect callback={setSelectedLanguage} default={selectedLanguage} label='Language' options={langOptions}/>
       </Grid>
       <Grid item xs={12}>
        <CustomSelect callback={setSelectedSound} default={selectedSound} label='Sound' options={soundOptions}/>
       </Grid>
       <Grid item xs={12}>
        <SliderComponent callback={setPitch} label='Pitch' marks={pitchMarks} defaultVal='30'/>
       </Grid>
       <Grid item xs={12}>
        <SliderComponent callback={setSelectedSpeakingRate} label='Speeking Rate' marks={rateMarks} defaultVal='20'/>
       </Grid>
       <Grid item xs={12}><Button onClick={handleSubmit} variant='contained' color='primary'> Submit </Button></Grid>
      </Grid>
    </Main>
  </>
};

export default Text2Speech;