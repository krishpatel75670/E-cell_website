// // Wait for the DOM to be fully loaded before running the script
// document.addEventListener("DOMContentLoaded", function() {

//     // Get the elements
//     const menuIcon = document.getElementById('menu-icon');
//     const sidebarMenu = document.getElementById('sidebar-menu');
//     const menuLinks = document.querySelectorAll('.menu-link');
//     const pages = document.querySelectorAll('.page-content');

//     // 1. Toggle menu visibility
//     menuIcon.addEventListener('click', function() {
//         sidebarMenu.classList.toggle('open');
//     });

//     // 2. Handle page navigation
//     menuLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault(); // Stop the link from a default page reload

//             // Get the target page ID from the link's href (e.g., "#home")
//             const targetId = this.getAttribute('href').substring(1); // "home"

//             // Hide all pages
//             pages.forEach(page => {
//                 page.classList.remove('active');
//             });

//             // Show the target page
//             document.getElementById(targetId).classList.add('active');

//             // Close the menu after clicking a link
//             sidebarMenu.classList.remove('open');
//         });
//     });
// });




// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {

    // Get the elements
    const menuIcon = document.getElementById('menu-icon');
    const sidebarMenu = document.getElementById('sidebar-menu');
    const menuLinks = document.querySelectorAll('.menu-link');
    const pages = document.querySelectorAll('.page-content');
    
    // NEW: Get team count elements
    const teamCountBox = document.getElementById('team-count-box');
    const teamCountNumber = document.getElementById('team-count-number');
    const teamList = document.querySelector('.team-list');
    const teamsLink = document.querySelector('a[href="#teams"]'); // Get the menu link for teams

    // 1. Toggle menu visibility
    menuIcon.addEventListener('click', function() {
        sidebarMenu.classList.toggle('open');
    });

    // 2. Handle page navigation
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Stop the link from a default page reload
            showPage(this.getAttribute('href')); // Use a helper function
        });
    });

    // 3. NEW: Calculate and display team count
    try {
        const totalTeams = teamList.getElementsByTagName('li').length;
        teamCountNumber.textContent = totalTeams;
    } catch (e) {
        console.error("Could not count teams:", e);
        teamCountNumber.textContent = "?";
    }

    // 4. NEW: Make the team count box clickable
    teamCountBox.addEventListener('click', function() {
        // Don't just show the page, simulate a click on the menu link
        // This keeps the "active" state logic (if you add it) consistent
        // and reuses the existing page switching code.
        teamsLink.click();
    });

    // Helper function to show a page
    function showPage(targetId) {
        // Get the target page ID from the link's href (e.g., "#home")
        const pageId = targetId.substring(1); // "home"

        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
        });

        // Show the target page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        // Close the menu after clicking a link
        sidebarMenu.classList.remove('open');
    }
});