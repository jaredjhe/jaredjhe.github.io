import "./projects.scss";
import ProjectItem from "./ProjectItem";
import { MainTheme, H2Line } from "../ThemeWrappers"

function Projects() {
    return (
        <MainTheme>
            <div className="projects" id="projects-scroll">
                <div className="projects-title">
                    <h2>Projects</h2>
                    <H2Line />
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies tincidunt ante, euismod dignissim felis dapibus sed. Maecenas lectus tortor, semper faucibus nisl non, sollicitudin vestibulum tellus. Curabitur rutrum, risus luctus accumsan pulvinar, lacus massa feugiat urna, ut maximus turpis mauris in felis. Ut vitae odio ac dui porta euismod. Nunc quis dapibus augue. Aliquam leo arcu, iaculis id metus sed, mattis gravida lectus. Quisque tempus arcu sit amet ullamcorper efficitur. Mauris dignissim mauris ut nibh placerat, eu faucibus mi ultricies. Suspendisse potenti. Cras magna tortor, dictum quis est sit amet, pellentesque luctus eros. Aliquam vehicula egestas euismod.

                    In hac habitasse platea dictumst. Ut eleifend sed enim nec interdum. Maecenas faucibus, eros in venenatis ullamcorper, dolor diam dapibus lectus, non luctus purus purus id mauris. Nunc vehicula scelerisque sem, sit amet vulputate ante pulvinar in. Quisque porttitor sagittis iaculis. Maecenas id ligula fringilla massa bibendum commodo sit amet nec dolor. Quisque porta lectus quis ante lobortis tincidunt. Sed consequat scelerisque augue, vel vestibulum ex elementum ut. Curabitur venenatis lobortis arcu, facilisis varius lorem pharetra at. Integer sit amet justo eu tortor vulputate tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt pulvinar erat ut porta.
                </p>
            </div>
        </MainTheme>
    );
}

export default Projects;