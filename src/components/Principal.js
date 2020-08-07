import React from 'react';
import App from '../App.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '50%',
      'margin-left': '25%',
      'margin-right': '25%',

    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const names = [

{id:1,title:'Puma', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:11000},
{id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:8000},
{id:3,title:'Nike combo', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:11000},
{id:4,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:800},
{id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:12000}

];

export default function Principal () {

  const classes = useStyles();

 const [age, setAge] = React.useState('');

 const handleChange = (event) => {
   setAge(event.target.value);
 };

 return (
   <div>
   <form className={classes.root} noValidate autoComplete="off">

       <TextField id="outlined-search" label="Busca algun producto...." type="search" variant="outlined" />

   </form>

<div className="container">
<div className="select-container">
<h3>Ordenar por:</h3>
<FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Marca</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Adidas</MenuItem>
          <MenuItem value={20}>Nike</MenuItem>
          <MenuItem value={30}>Puma</MenuItem>
        </Select>
      </FormControl>
</div>
<div className="data-container">
      <ul >{names.map(name =>
        <li className="product" key={name.id}>
        <h1>{name.title} </h1>
        <p>{name.desc} </p>
        <p>${name.price}</p>
        </li>)}
        </ul>
        </div>
        </div>
    </div>
  );
}
