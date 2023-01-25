import { Box, Nav, Link } from './NavBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

 const NavBar = () => {
  return (
    <Box>
      <Nav>
        {navItems.map(({ href, text }) => (
          <Link to={href} key={href}>
            {text}
          </Link>
        ))}
      </Nav>
    </Box>
  );
};
export default NavBar