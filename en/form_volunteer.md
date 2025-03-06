---
layout: default
lang: zh
title: "Form_Volunteer | The Person-Centered Institute of Asia"
alternate_url: "/zh/form_volunteer"
---

  <section class="page-header">
    <h1>Volunteer Application Form</h1>
  </section>

<form class="form" name="volunteer-application" method="POST" data-netlify="true" action="en/ThankYou">
  <input type="hidden" name="form-name" value="volunteer-application">
  
  <h2>1. Personal Information</h2>
  <label>Full Name: <input type="text" name="name" required></label><br>
  <label>Gender (optional): <input type="text" name="gender"></label><br>
  <label>Email: <input type="email" name="email" required></label><br>
  <label>Phone: <input type="tel" name="phone"></label><br>
  <label>WeChat/Other Contact (optional): <input type="text" name="wechat"></label><br>
  <label>City/Country: <input type="text" name="location"></label><br>

  <h2>2. Your Background</h2>
  <fieldset>
    <legend>Professional/Educational Background (Select all that apply):</legend>
    <label><input type="checkbox" name="background" value="Psychology/Counseling"> Psychology/Counseling</label><br>
    <label><input type="checkbox" name="background" value="Education/Training"> Education/Training</label><br>
    <label><input type="checkbox" name="background" value="Social Work/Nonprofit"> Social Work/Nonprofit</label><br>
    <label><input type="checkbox" name="background" value="Media/Communications/Writing"> Media/Communications/Writing</label><br>
    <label><input type="checkbox" name="background" value="Design/Art/Multimedia"> Design/Art/Multimedia</label><br>
    <label><input type="checkbox" name="background" value="Technology/IT/Data Analysis"> Technology/IT/Data Analysis</label><br>
    <label>Other (please specify): <input type="text" name="background_other"></label>
  </fieldset>

  <label>Do you have any volunteer experience?</label><br>
  <textarea name="experience" rows="4"></textarea><br>

  <h2>3. Your Interests & Skills</h2>
  <fieldset>
    <legend>What volunteer activities are you skilled at or willing to participate in? (Select all that apply)</legend>
    <label><input type="checkbox" name="skills" value="Writing"> Writing</label><br>
    <label><input type="checkbox" name="skills" value="Translation"> Translation</label><br>
    <label><input type="checkbox" name="skills" value="Online Community Management"> Online Community Management</label><br>
    <label><input type="checkbox" name="skills" value="Visual Design"> Visual Design</label><br>
    <label><input type="checkbox" name="skills" value="Website/Technical Support"> Website/Technical Support</label><br>
    <label><input type="checkbox" name="skills" value="Event/Meeting Organization"> Event/Meeting Organization</label><br>
    <label><input type="checkbox" name="skills" value="Research & Data Compilation"> Research & Data Compilation</label><br>
    <label>Other (please specify): <input type="text" name="skills_other"></label>
  </fieldset>

  <h3>Your Second Language (if your first language is not English, please specify here)</h3>
  <label>Language: <input type="text" name="second_language"></label><br>
  <fieldset>
    <legend>Proficiency Level (Select one):</legend>
    <label><input type="radio" name="language_proficiency" value="Basic Level"> Basic Level</label><br>
    <label><input type="radio" name="language_proficiency" value="Able to handle basic daily conversations and emails"> Able to handle basic daily conversations and emails</label><br>
    <label><input type="radio" name="language_proficiency" value="Able to engage in complex and in-depth conversations and emails"> Able to engage in complex <br> and in-depth conversations and emails</label><br>
    <label><input type="radio" name="language_proficiency" value="Able to accurately and fluently interpret between the first and second language"> Able to accurately and fluently interpret <br> between the first and second language</label><br>
  </fieldset>

  <h2>4. Your Availability</h2>
  <fieldset>
    <legend>How much time can you commit as a volunteer?</legend>
    <label><input type="checkbox" name="availability" value="Fixed weekly schedule"> Fixed weekly schedule</label><br>
    <label><input type="checkbox" name="availability" value="Only participate in specific projects"> Only participate in specific projects</label><br>
    <label><input type="checkbox" name="availability" value="Not sure yet"> Not sure yet</label><br>
    <label>Estimated hours available: <input type="text" name="available_hours"></label>
  </fieldset>

  <label>Are you willing to participate in volunteer training or regular meetings?</label><br>
  <label><input type="radio" name="training" value="Yes"> Yes</label>
  <label><input type="radio" name="training" value="No"> No</label><br>

  <h2>5. Your Expectations for the Volunteer Community</h2>
  <label>Why do you want to join?</label><br>
  <textarea name="why_join" rows="4"></textarea><br>

  <label>Do you have any suggestions or expectations for the volunteer community?</label><br>
  <textarea name="expectations" rows="4"></textarea><br>

  <h2>6. Additional Information</h2>
  <label>Other comments or additional information:</label><br>
  <textarea name="additional_info" rows="4"></textarea><br>

  <button class="btn" type="submit">Submit</button>
</form>