---
layout: default
lang: zh
title: "Form_Volunteer | The Person-Centered Institute of Asia"
alternate_url: "/en/form_volunteer"
---

<form class="form" name="volunteer-application" method="POST" data-netlify="true" action="/ThankYou" netlify>
  <h2>1. 个人信息</h2>
  <label>姓名：<input type="text" name="name" required></label><br>
  <label>性别（可选）：<input type="text" name="gender"></label><br>
  <label>年龄：<input type="number" name="age"></label><br>
  <label>邮箱：<input type="email" name="email" required></label><br>
  <label>电话：<input type="tel" name="phone"></label><br>
  <label>微信/其他联系方式（可选）：<input type="text" name="wechat"></label><br>
  <label>所在城市/国家：<input type="text" name="location"></label><br>

  <h2>2. 你的背景</h2>
  <fieldset>
    <legend>职业/专业背景（可多选）：</legend>
    <label><input type="checkbox" name="background" value="心理咨询/心理学"> 心理咨询/心理学</label><br>
    <label><input type="checkbox" name="background" value="教育/培训"> 教育/培训</label><br>
    <label><input type="checkbox" name="background" value="社会工作/公益"> 社会工作/公益</label><br>
    <label><input type="checkbox" name="background" value="传播/媒体/写作"> 传播/媒体/写作</label><br>
    <label><input type="checkbox" name="background" value="设计/美术/多媒体"> 设计/美术/多媒体</label><br>
    <label><input type="checkbox" name="background" value="技术/IT/数据分析"> 技术/IT/数据分析</label><br>
    <label>其他（请注明）：<input type="text" name="background_other"></label>
  </fieldset>

  <label>你是否有志愿服务经验？</label><br>
  <textarea name="experience" rows="4"></textarea><br>

  <h2>3. 你的兴趣与技能</h2>
  <fieldset>
    <legend>你擅长或愿意参与的志愿服务内容（可多选）：</legend>
    <label><input type="checkbox" name="skills" value="文字撰写"> 文字撰写</label><br>
    <label><input type="checkbox" name="skills" value="翻译"> 翻译</label><br>
    <label><input type="checkbox" name="skills" value="线上社群运营"> 线上社群运营</label><br>
    <label><input type="checkbox" name="skills" value="视觉设计"> 视觉设计</label><br>
    <label><input type="checkbox" name="skills" value="网站或技术支持"> 网站或技术支持</label><br>
    <label><input type="checkbox" name="skills" value="会议或活动组织"> 会议或活动组织</label><br>
    <label><input type="checkbox" name="skills" value="研究与资料整理"> 研究与资料整理</label><br>
    <label>其他（请具体说明）：<input type="text" name="skills_other"></label>
  </fieldset>

  <h2>4. 你的可用时间</h2>
  <fieldset>
    <legend>你期望的志愿者投入程度：</legend>
    <label><input type="checkbox" name="availability" value="每周固定时间"> 每周固定时间</label><br>
    <label><input type="checkbox" name="availability" value="仅在有具体项目时参与"> 仅在有具体项目时参与</label><br>
    <label><input type="checkbox" name="availability" value="目前不确定"> 目前不确定</label><br>
    <label>预计可投入时间：<input type="text" name="available_hours"></label>
  </fieldset>

  <label>你是否愿意参加志愿者培训或定期沟通会议？</label><br>
  <label><input type="radio" name="training" value="是"> 是</label>
  <label><input type="radio" name="training" value="否"> 否</label><br>

  <h2>5. 你对志愿者社群的期待</h2>
  <label>你为什么想加入？</label><br>
  <textarea name="why_join" rows="4"></textarea><br>

  <label>你对志愿者社群有任何建议或期待吗？</label><br>
  <textarea name="expectations" rows="4"></textarea><br>

  <h2>6. 其他补充</h2>
  <label>其他补充信息：</label><br>
  <textarea name="additional_info" rows="4"></textarea><br>

  <button class="btn" type="submit">提交</button>
</form>