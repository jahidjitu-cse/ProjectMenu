import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResults/SearchResult";
export const BASE_URL = "http://localhost:3000";


const App = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchData, setSearchData] = useState(null);
  const [touchBtn, setTouchBtn] = useState("all");



  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {

        const response = await fetch(BASE_URL);

        const json = await response.json();

        setData(json);
        setSearchData(json);
        setLoading(false);
      } catch (error) {
        setError("Please Try Again Later");
      }
    };
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    if (searchValue === "") {
      setSearchData(null);
    }

    const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()));
    setSearchData(filter);
  };
  const filterFood = (type) => {
    if (type === "all") {
      setSearchData(data);
      setTouchBtn("all");
      return;
    }
    const filter = data?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase()));
    setSearchData(filter);
    setTouchBtn(type);
  }

  const fiterBtnS=[
    {
      name:"All",
      type:"all"
    },
    {
      name:"Breakfast",
      type:"breakfast"
    },
    {
      name:"Lunch",
      type:"lunch"
    },
    {
      name:"Dinner",
      type:"dinner"
    },
    {
      name:"Snacks",
      type:"snacks"
    },
  ]
  if (error) return <div>{error}</div>
  if (loading) return <div>Loading.....</div>

  return (
    <>
      <Section>
        <TopSection>
          <div className="logo">
            <h1 className="LogoTag">Eat <br />Meat</h1>
          </div>

          <div className="search">
            <input onChange={searchFood} placeholder="Search Food" />
          </div>
        </TopSection>
        <FilterSection>
          {
            fiterBtnS.map((value)=>(
              <Button isSelected={touchBtn===value.type} key={value.name} onClick={()=>filterFood(value.type)}>{value.name}</Button>
            ))
          }
        </FilterSection>
      </Section>
      <SearchResult data={searchData} />

    </>

  );
};
export default App;

export const Section = styled.div`
max-width:1200px;
margin:0 auto;`;
const TopSection = styled.section`
height:140px;
display:flex;
justify-content:space-between;
padding:16px;
align-items:center;
.LogoTag{
  font-family: 'Rocher';
  text-align: center;
  font-size: 50px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.search{
  input{
    background-color:transparent;
    border:1px solid red;
    color:white;
    border-radius:5px;
    heigth:40px;
    font-size:16px;
    padding:0 10px;
    &::placeholder{
      color:white;
    }
  }
}
@media(0<width<600px){
  flex-direction:column;
  height:120px;
}
`;
const FilterSection = styled.section`
display:flex;
justify-content:center;
gap:12px;
padding-bottom:40px;
`;

export const Button = styled.button`
background:${({isSelected})=> (isSelected? "#f22f2f":"#ff4343")} ;
outline:1px solid ${({isSelected})=> (isSelected? "white":"#ff4343")} ;
border-radius:5px;
padding:6px 12px;
border:none;
color:white;
curser:pointer;
&:hover{
  background-color:#f22f2f;
}
`;

