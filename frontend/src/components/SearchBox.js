import React, {useState} from 'react'
import { Button, Form} from "react-bootstrap";
import { useNavigate} from "react-router-dom";




const SearchBox = () => {
const [keyword, setKeyword] = useState("")

let navigate = useNavigate()



const submitHandler = (e) =>{
    e.preventDefault()
    if(keyword){
        navigate(`/?keyword=${keyword}`)
    }else{
        navigate("/");
    }
}

  return (
    <Form className="d-flex align-items-center justify-content-center w-40" inline onSubmit={submitHandler}>
      <Form.Control
        placeholder="Search"
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 ml-sm-3"
      ></Form.Control>
      <Button className="p-1 mx-2" type="submit" variant="outline-success">
        Search
      </Button>
    </Form>
  );
}

export default SearchBox