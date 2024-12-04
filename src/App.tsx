import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools"
import { darkTheme, lightTheme } from "./theme";
import { ButtonStyle, GlobalStyle, StyledBsFillMoonFill, StyledBsFillSunFill } from "./component";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "./atoms";


function App() {
	const isDark = useRecoilValue(isDarkAtom);
	const setDarkAtom = useSetRecoilState(isDarkAtom);
	const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
	return (
		<>
			<Helmet>
				<link href='https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap' rel="stylesheet" />
			</Helmet>
			<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
				<GlobalStyle />
				<ButtonStyle>
					<p onClick={() => toggleDarkAtom()}>
						{isDark ? <StyledBsFillSunFill color="white" /> : <StyledBsFillMoonFill color="black" />}
					</p>
				</ButtonStyle>
				<Router />
				{/* <ReactQueryDevtools initialIsOpen={true} /> */}
			</ThemeProvider >
		</>

	)
}


export default App;