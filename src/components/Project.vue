<template>
  <main class='project'>
    <h2><a :href="titleLink" target="_blank">{{ title }}</a></h2>
    <h4>{{ tech }}</h4>
    <p>{{ subtitle }}</p>
    <litebox :images="this.images"
             :prefix="this.prefix"></litebox>
    <p v-for="paragraph in body">{{ paragraph }}</p>
    <h4><router-link class="out"
      v-bind:to="'/portfolio'">Back</router-link></h4>
  </main>
</template>

<script>
import Litebox from './Litebox';

const projects = {
  1: {
    title: 'gmg - GroupMe Client',
    prefix: 'groupme',
    titleLink: "http://github.com/skwh/groupme-client",
    subtitle: 'I designed and implemented an Electron-based GroupMe client, making use of GroupMe\'s extensive public API and push messaging service.',
    tech: 'Electron, Angular 4, SCSS, Figma (mockups)',
    body: [
      'For this project, my emphasis was on creating a messaging application which was usable and acted on a user\'s expectations of how messaging applications should work, but at the same time, stood out, was easy to use, and looked good. I also wanted to tackle the issue of using the familiar design featured in GroupMe\'s mobile app and existing Web clients, while still creating my own design.',
      'In creating a unique interface, I decided to use the familiar GroupMe blue color, however using a grey as a distinguishing secondary color. I then started to build from the foundational design principles: giving lots of space to the logo in the top left, and then including familiar navigation elements below that, splitting the "Group Chats" and "Direct Chats" into two sections, in a similar manner to Slack\'s interface. I used an off-blue color to signify which group was currently selected, and then a green for a group which had a pending notification, ensuring that the notification icon would stand out.',
      'Of course, the second part of the design process wasn\'t just the colors and fonts, but also the user\'s interactive experience. I wanted a way to display which users had liked messages which corresponded more heavily towards the GroupMe app\'s style, which was to display the avatars and names of users below messages, vs the web interface\'s style, which displayed them floating above the heart icon. I decided to make messages clickable. The messages, when clicked, slid open to reveal more information about them - a timestamp and the names of the users who liked the message.',
      'A further challenge was how to enable and communicate administrative features to users. How could a user add another user to a group? How could they change the group\'s avatar? How could they set their notification settings for the group? I decided on a twofold approach: there would be a page which listed all of the user\'s groups, and provided access to a settings page from there, and a bar which displayed above the message feed for a group, which contained the group\'s name, avatar, and again, a link to the group\'s settings page. This meant that users could both see all of the groups that they were part of to manage them individually, and get more information about a group that they were currently chatting in.'
    ],
    images: [
      'registration-view.png',
      'default-view.png',
      'main-view.png',
      'likes-component.png',
      'end-of-messages-component.png',
      'new-messages-component.png',
      'attach-view.png',
      'message-with-attachments-view.png',
      'message-with-attachments-hidden-component.png',
      'groups-index-2.png',
      'group-edit-view.png',
      'create-group-view.png',
      'group-load-error-popup.png',
      'mention-component.png',
      'settings-view.png',
      'message-error-component.png',
      'colors.png',
      'font-choices.png',
      'fonts.png',
      'groups-index.png',
      'list-item-design.png',
    ]
  },
  2: {
    title: 'Fairview High School - Website & Redesign',
    prefix: 'fhs',
    titleLink: 'http://fhsroyalbanner.com',
    subtitle: 'In high school I joined the school\'s student-run newspaper, The Royal Banner, and overhauled the old wordpress-based site to a new, Ruby on Rails based one. After I graduated, I returned to the paper for a week and helped the staff create a new design for the website, which is now in development. The design included new typography, and a new layout for mobile.',
    tech: 'Ruby on Rails, jQuery, SCSS, Figma (mockups)',
    body: [
      'When I first joined the school\'s newspaper, I found that the old website wasn\'t working well for users. It was inconsistent, hard to navigate, and many elements of it seemed to be broken or nonfunctional. The old website had been based off of WordPress and had not been sufficently maintained over the years. The newspaper staff wanted a website which would let them reach their readers and had a clear, consistent design that reflected the school\'s visual aesthetic (colors of red and black) and was unique to the newspaper. The staff also wanted a better way to engage with their audience better than the current system that had come with their WordPress site.',
      'When I first began to design the site, I took the requests of the newspaper staff in mind. I centered my visual design around modern design styles and the school\'s colors: the title was large, bold, and black, and important links were marked by lighter and darker versions of the schoo\'s primary red. I made sure that the titles and images associated with stories got focus, and developed a layout based on a grid system and cards which would enable users to quickly and easily browse content. I took some inspiration from other news websites, like Wired and the New York Times, in considering how users would experience the front page and each story page on the website.',
      'When it came to the newspaper staff, I tried to simplify and enrich the story creation and editing process as much as possible. The staff got access to a special section of the site which allowed them to browse the already published stories, images associated with those stories, and the special static pages on the site. They also were able to write a biography and include a picture of themselves on their profile page.',
      'Some of my most interesting design challenges were unexpected ones. The staff requested a ticker be placed on the site that would allow them to include the scores of school sports games in a place which could easily be found, rather than writing a story about the game as it was progressing. The ticker I developed ended up being a bit of a mess, but it reliably scrolled through the games that were included by the staff.',
      'The site that I created for the staff the first time was something that I was proud of, but it was also mired with my inexperience. The title that I had so proudly displayed in large, bold font took up most of the front page- it was stylistic, sure, but it meant that users had to scroll to see most of the content on the page. The site greeted them with its name - not with the content that they had come there for. I had also decided to use a carousel to display the most recent and important stories, something which meant that lots of content was relegated to a small section of the page. Finally, the way in which I had implemented the photos associated with stories meant that those photos were relegated to the top of the story, and were rather small in size. Most of the visual layout of the website was taken up by navigation and flair, not helpful or beautiful elements.',
      'After a year in college, I returned to my high school\'s newspaper staff and asked them the same question that I had when I first joined: how does the website work for you? They had found and told me about the issues I detailed above. So I worked with the newspaper\'s visual designer and leads to fix some of these issues.',
      'The first thing we did was do away with the huge newspaper title. Now, the title was relegated to the upper left hand side of the page. Instead, most of the page would be taken up by a story\'s headline image- bringing more focus back to the story itself. This was inspired by headline images on sites like the New York Times Magazine and Medium. We then placed the story\'s content on a card so that it stood out from the image itself. We decided to move the card in such a way that it overlapped with the image- fusing the image of the story with its textual content.',
      'Next, we did away with a sidebar holding relevant stories. We wanted the focus to be back on the story the user was currently reading. A sidebar took away from that by introducing more textual noise while a user was trying to read. So, recommended stories became a list of smaller cards at the bottom of the current story, all of which used their headline image as a background, again emphasizing imagery.'
    ],
    images: [
      'desktop-homepage-2.png',
      'desktop-storypage-2.png',
      'desktop-control-panel-2.png',
      'mobile-homepage.png',
      'mobile-search.png',
      'mobile-storypage.png',
      'navigation-drawer.png',
      'typography-2.png',
      'logo-typography-2.png',
      'desktop-homepage.png',
      'desktop-storypage.png',
      'desktop-control-panel.png',
      'typography.png',
      'logo-typography.png',
      'colors.png',
    ]
  },
  3: {
    title: 'Hello LA! - Hack @ Brown 2016 Entry',
    prefix: 'hello-la',
    titleLink: 'https://hello-la.herokuapp.com/',
    subtitle: 'As a high school senior I attended Hack @ Brown 2016, a hackathon sponsored by Brown University.',
    tech: 'Ruby on Rails, jQuery, SCSS',
    body: [
      'For my team\'s project, I acted as a full-stack developer, and worked closely with two design students on the team to translate Adobe Illustrator mockups into working code. I also developed the back-end functionality of the website, which acted as a faux tourism website for Los Angeles. This project won the "Best UX" award, from sponsor pMD.'
    ],
    images: [
      'hello_la.png'
    ]
  }
}

export default {
  name: 'Project',
  components: { Litebox },
  data() {
    return this.getProjectForId(this.$route.params.id);
  },
  methods: {
    getProjectForId(id) {
      return projects[id];
    }
  }
}
</script>

<style scoped>

div.lightbox {
  margin: auto;
  width:75%;
}

.project>p {
	text-indent: 2em;
}

.project>h2, .project>h4 {
  margin: 0;
}

.project>h2 {
  font-size: 2em;
}

.project>h4 {
  color: rgba(200,200,200,1);
  margin-left: 1em;
  font-size: 1.25em;
}

.project>h2>a, h3>a {
  transition: color 0.3s;
}

.project>h2>a:hover {
  color: #AAA;
}

h3>a:hover {
  color: rgb(66, 134, 244);
}

.project>h2>a::after, h3>a::after {
  content: "  >>";
  font-size: 0.75em;
  transition: margin-left 0.2s;
}

.project>h2>a:hover::after {
  margin-left: 0.3em;
  color: #AAA;
}

h3>a:hover::after {
  margin-left: 0.3em;
}

.project>p {
  font-weight: 400;
  line-height: 1.75em;
  font-size: 1.15em;
}
</style>
