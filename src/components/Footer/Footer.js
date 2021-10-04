const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="mt-4 mb-4">
      <footer className='text-center text-capitalize'>
        copyright Hero University &copy; {year}
      </footer>
    </div>
  )
}

export default Footer
