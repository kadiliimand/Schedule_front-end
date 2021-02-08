<template>
  <div>
    <h1>My schedule</h1>
    <table border="1">
      <tr>
        <th>Date</th>
        <th>Start time</th>
        <th>End time</th>
        <th>Worked time</th>
        <th>Overtime <input v-model="overtime" placeholder="overtime"></th>
        <button v-on:click="saveInHtml()">Submit overtime!</button>

      </tr>
      <tr v-for="row in schedule">
        <td>{{ row.date }}</td>
        <td>{{ row.start_time }}</td>
        <td>{{ row.end_time }}</td>
        <td>{{ row.worked_time }}</td>

      </tr>
    </table>
    <h1>Team schedule</h1>
    <table border="1">
      <tr>
        <th>Date</th>
        <th>Employee</th>
      <tr v-for="row in employee">
        <td>{{ row.name }}</td>
        <td>
          <table border="1">
            <tr>
              <th>Shift</th>
              <th>Deposit</th>
              <th>Withdrawal</th>
              <th>Transfer</th>
              <th>From Account number</th>
              <th>To Account number</th>
              <th>Timestamp</th>
            </tr>
            <tr v-for="historyRow in row.transactionHistoryList">
              <td>{{ historyRow.transactionId }}</td>
              <td>{{ historyRow.deposit }}</td>
              <td>{{ historyRow.withdrawal }}</td>
              <td>{{ historyRow.transfer }}</td>
              <td>{{ historyRow.fromAccount }}</td>
              <td>{{ historyRow.toAccount }}</td>
              <td>{{ historyRow.localDateTime }}</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

  </div>

</template>
