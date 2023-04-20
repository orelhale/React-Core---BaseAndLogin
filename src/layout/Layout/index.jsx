import Header from "../Header"
import Main from "../Main"
import Nav from "../Nav"
import Context from "../../context/Context"
import { useContext, useEffect } from "react"

export default function Layout() {
	let { data, setDate } = useContext(Context)

	useEffect(() => {
		setDate("Context in Layout")
	}, [])

	return (
		<div className="Layout">
			{data && <h1>{data}</h1>}
			<Header />
			<Main />
			<Nav />
		</div>
	)
}