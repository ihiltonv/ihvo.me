export default function NavItems(props) {
    return (
        <>
        <div className="space-y-8 text-right">
              <h3 className={"cursor-pointer font-nunito " + (props.current === "home" ? "text-xl font-bold" : "text-sm")} onClick={() => props.scroll("top")}>Home</h3>
              <h3 className={"cursor-pointer font-nunito " + (props.current === "projects" ? "text-xl font-bold" : "text-sm")} onClick={() => props.scroll("projects")}>Projects</h3>
              <h3 className={"cursor-pointer font-nunito " + (props.current === "aboutme" ? "text-xl font-bold" : "text-sm")} onClick={() => props.scroll("aboutme")}>About Me</h3>
        </div>
        </>
    )
}