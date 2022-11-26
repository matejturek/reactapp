const Faq: React.FC = () => {
    const a = true;
    const b = ["a", "b", "c"]



  return (
    <>
        { a ? <div>Faq</div> : <div>aaa</div>}
        <ul>
        {b.map(x => <li>{x}</li> )}
        </ul>
    </>
  )
}

export default Faq
