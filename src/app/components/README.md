# Components
## Containers 

This repo follows the container component pattern.

NB containers are just React components

"A container does the data fetching and then renders its corresponding sub-component. That's it." [Medium Blog Post Source](https://medium.com/@learnreact/container-components-c0e67432e005)

Here is a helper video to explain this pattern from Facebook: [Ext. YouTube Link](https://www.youtube.com/watch?v=KYzlpRvWZ6c)

## Components & components
All components in this repo need to have at least one story and one set of unit tests usually including the snapshot tests. We expect 90% or greater code coverage of each component.

Any of the components in this directory are a good example of how we wish components to be written and should be studied as templates for contribution, that is unless there are inline comments saying otherwise.

During development component must be developed in isolation in Storybook (see the primary README in this repo for information). Components must be integrated into other components in separate PRs - this is due to very different testing standards between adding to the component library (this and the containers directory) and the applications routes (the subset of components that are routed to in the main application).