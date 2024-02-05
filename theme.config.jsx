import { groupName, license } from "./constants"
import { LuBrainCircuit } from "react-icons/lu"

export default {
    docsRepositoryBase: 'https://github.com/Biosense-Collective/docs/tree/main',
    project: {
        link: `https://github.com/${groupName.replaceAll(" ", "-")}`
    },
    logo: <>
        <LuBrainCircuit size={40}/>
        <span style={{ marginLeft: '.8em', fontWeight: 800 }}>
            {groupName}
        </span> 
    </>,
    primaryHue: {
        dark: 170,
        light: 270,
    },
    sidebar: {
        defaultMenuCollapseLevel: 1,
        toggleButton: true,
    },
    head: (
        <>
            <meta property="og:title" content={`${groupName}`} />
            <meta property="og:description" content={`${groupName} official documentation portal.`} />
        </>
    ),
    footer: {
        text: `${license} ${new Date().getFullYear()} © ${groupName}`,
    },
    useNextSeoProps() {
        return {
            titleTemplate: `%s - ${groupName}`
        }
    }
}