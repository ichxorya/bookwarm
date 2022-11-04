import React from 'react'

const Home = (props) => {

  return (
    // Example of using form
    <>
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <label>
                Email:
                <input type="text" name="email" />
            </label>
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        
      <style jsx>
        {`
            
        `}
      </style>
    </>
  )
}

export default Home
