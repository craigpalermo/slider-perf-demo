import React from 'react'
import ReactMarkdown from 'react-markdown'

const input = `
# Affect of Background JS Processes on UX Performance with React
_Craig Palermo - March 10, 2019_

## Problem
UI components built with React that depend on continually updating
state during user interaction are prone to fluctuations of activity
on the JS main thread that might delay these updates. This can result
in a temporarily unresponsive UI and confusing experience.

While any number of sources could cause this background activity, I've observed scripts such as
Google Tag Manager and various fraud protection tools attach various event listeners
that can cause this type of delay. You can observe this on your own site by profiling
JS activity while the sit is idle, as well as when triggering user events, such as \`mouseover\`,
 \`click\`, \`mouseenter\`, etc.

## Demo
The frequency of activity that blocks the main thread, as well as the duration that
the browser spends on that work, can both affect the degree to which the UX is noticeably
affected. Try adjusting each of these values, then interacting with the slider. Notice
how different combinations result in various degrees of degradation in the user experience.

Try this on a mobile device as well to see how difficult this
lag can make interactions for mobile users, especially those with older devices.
`

export default function Readme() {
  return <ReactMarkdown source={input}/>
}